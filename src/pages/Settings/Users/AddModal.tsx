import { object, string, ref } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Autocomplete,
  IconButton,
} from "@mui/material";
import { uniqueId } from "lodash";
import type { FormValues } from "../../../models";
import { useForm } from "react-hook-form";
import React from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../../redux/user.slice";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

interface Props {
  open: boolean;
  handleClose: () => void;
}

export const roles = ["Admin", "Agent", "Superviser"];
export const tenants = ["Admin", "Agent", "Superviser"];

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
    .ensure()
    .oneOf(roles, `Rolu must be one of ${roles.join(", ")}`)
    .required("Role is required"),
  tenant: string()
    .ensure()
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

export const AddModal = ({ open, handleClose }: Props) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const dispatch = useDispatch();
  const { register, handleSubmit, formState, reset } =
    useForm<FormValues>({
      mode: "onChange",
      shouldFocusError: true,
      reValidateMode: "onChange",
      resolver: yupResolver(schema),
    });

  const onSubmit = (user: any) => {
    dispatch(
      addUser({
        id: uniqueId(),
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
    reset()
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
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
              options={roles}
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
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <TextField
              label="Password"
              size="medium"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              id="passwordInput"
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
          <Button color="inherit" onClick={handleClose}>
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
