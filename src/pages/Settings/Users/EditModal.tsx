import { object, string, ref } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Box,
  TextField,
  Autocomplete,
  InputAdornment,
  IconButton,
} from "@mui/material";
import type { FormValues } from "../../../models";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { editUser } from "../../../redux/user.slice";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import React from "react";

interface PropsEdit {
  openEdit: boolean;
  handleCloseEdit: () => void;
  user: any;
}

const roles = ["Admin", "Agent", "Superviser"];
const tenants = ["Admin", "Agent", "Superviser"];

const passwordSpecialChars = ["!", "@", "#", "$", "%", "&"];

const schema = object().shape({
  name: string().required("Name is required"),
  surname: string().required("Surname is required"),
  email: string().email("Email is not valid").required("Email is required"),
  username: string()
    .matches(/[a-z]*/, "Username is not valid")
    .min(5, "Username is too short")
    .max(20, "Username is too long")
    .required("Username is required"),
  role: string()
    .oneOf(roles, `Rolu must be one of ${roles.join(", ")}`)
    .required("Role is required"),
  tenant: string()
    .oneOf(roles, `Rolu must be one of ${roles.join(", ")}`)
    .required("Tenant is required"),
  password: string()
    .min(8, "Password is too short")
    .max(50, "Password is too long")
    .test({
      name: "passwordSpecialChars",
      message: "Add special characters",
      test: (value = "") => {
        return [...value].some((char) => passwordSpecialChars.includes(char));
      },
    })
    .required("Password is required"),
  confirmPassword: string()
    .oneOf([ref("password"), ""], "Passwords must match")
    .required("Confirm password is required"),
});

export const EditModal = ({ user, openEdit, handleCloseEdit }: PropsEdit) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const dispatch = useDispatch();
  const { register, handleSubmit, formState, watch, getValues } =
    useForm<FormValues>({
      mode: "onChange",
      shouldFocusError: true,
      reValidateMode: "onChange",
      resolver: yupResolver(schema),
    });

  const onSubmit = (user: any) => {
    dispatch(
      editUser({
        id: user.id,
        name: user.name,
        surname: user.surname,
        email: user.email,
        username: user.username,
        role: user.role,
        tenant: user.tenant,
        password: user.password,
        confirmPassword: user.confirmPassword,
      })
    );
    handleCloseEdit();
  };
  return (
    <Dialog
      open={openEdit}
      onClose={handleCloseEdit}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <DialogTitle id="alert-dialog-title">{"Add , Edit user "}</DialogTitle>
        <DialogContent
          sx={{
            "& .MuiTextField-root": { m: 1, width: "255px" },
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <TextField
              size="medium"
              id="name"
              label="Name"
              variant="outlined"
              type="text"
              {...register("name")}
              error={Boolean(formState?.errors?.name)}
              helperText={formState?.errors?.name?.message ?? ""}
              defaultValue={user.name}
            />
            <TextField
              size="medium"
              id="surname"
              label="Surname"
              variant="outlined"
              type="text"
              {...register("surname")}
              error={Boolean(formState?.errors?.surname)}
              helperText={formState?.errors?.surname?.message ?? ""}
              defaultValue={user.surname}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <TextField
              size="medium"
              id="email"
              label="Email"
              variant="outlined"
              {...register("email")}
              error={Boolean(formState?.errors?.email)}
              helperText={formState?.errors?.email?.message ?? ""}
              defaultValue={user.email}
            />
            <TextField
              size="medium"
              id="username"
              label="Username"
              variant="outlined"
              type="text"
              {...register("username")}
              error={Boolean(formState?.errors?.username)}
              helperText={formState?.errors?.username?.message ?? ""}
              defaultValue={user.username}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Autocomplete
              disablePortal
              id="addedRoles"
              options={roles}
              defaultValue={user.role}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Role"
                  variant="outlined"
                  id="role"
                  {...register("role")}
                  error={Boolean(formState?.errors?.role)}
                  helperText={formState?.errors?.role?.message ?? ""}
                />
              )}
            />
            <Autocomplete
              disablePortal
              id="addedTenants"
              options={tenants}
              defaultValue={user.tenant}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Tenant"
                  id="tenant"
                  variant="outlined"
                  {...register("tenant")}
                  error={Boolean(formState?.errors?.tenant)}
                  helperText={formState?.errors?.tenant?.message ?? ""}
                />
              )}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <TextField
              label="Password"
              size="medium"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              id="passwordInput"
              defaultValue={user.password}
              {...register("password")}
              error={Boolean(formState?.errors?.password)}
              helperText={formState?.errors?.password?.message ?? ""}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {" "}
                    <IconButton
                      onClick={() => {
                        setShowPassword(!showPassword);
                      }}
                    >
                      {showPassword ? (
                        <VisibilityOutlinedIcon />
                      ) : (
                        <VisibilityOffOutlinedIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            ></TextField>

            <TextField
              id="confirmPassword"
              label="Confirm password"
              size="medium"
              variant="outlined"
              defaultValue={user.confirmPassword}
              type={showConfirmPassword ? "text" : "password"}
              {...register("confirmPassword")}
              error={Boolean(formState?.errors?.confirmPassword)}
              helperText={formState?.errors?.confirmPassword?.message ?? ""}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {" "}
                    <IconButton
                      onClick={() => {
                        setShowConfirmPassword(!showConfirmPassword);
                      }}
                    >
                      {showConfirmPassword ? (
                        <VisibilityOutlinedIcon />
                      ) : (
                        <VisibilityOffOutlinedIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>
        </DialogContent>
        <DialogActions sx={{ paddingRight: "30px", paddingLeft: "30px" }}>
          <Button color="inherit" onClick={handleCloseEdit}>
            Cancel
          </Button>
          <Button color="success" variant="contained" type="submit" autoFocus>
            Save
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
