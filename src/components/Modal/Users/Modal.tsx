import { object, string, ref } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  InputAdornment,
  IconButton,
  MenuItem,
} from "@mui/material";
import type { FormValues, Users } from "../../../models/interfaces";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addUser, editUser } from "../../../redux/user.slice";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import React, { useEffect } from "react";
import { roleSelector } from "../../../redux/role.slice";
import { uniqueId } from "lodash";
import { tenantSelector } from "../../../redux/tenant.slice";

interface ModalProps {
  user?: Users | null;
  type: string;
  modalOpen: any;
  // setModalOpen: any;
  handleClose: () => void;
}
export const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 120,
      width: 250,
    },
  },
};

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
    // .oneOf(roles, `Rolu must be one of ${roles.join(', ')}`)
    .required("Role is required"),
  tenant: string()
    // .oneOf(roles, `Rolu must be one of ${roles.join(', ')}`)
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

export const Modal = ({ user, type, modalOpen, handleClose }: ModalProps) => {
  const roles = useSelector(roleSelector);
  const tenants = useSelector(tenantSelector);
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [role, setRole] = React.useState("");
  const [tenant, setTenant] = React.useState("");
  const dispatch = useDispatch();
  // const handleClose = () => setModalOpen(false);

  const { register, handleSubmit, formState, reset } = useForm<FormValues>({
    mode: "onChange",
    shouldFocusError: true,
    reValidateMode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit = (fromSubmitData: any) => {
    if (type === "edit") {
      dispatch(editUser(fromSubmitData));
      setRole("");
      setTenant("");
      handleClose();
      reset();
    }
    if (type === "add") {
      dispatch(
        addUser({
          id: uniqueId(),
          name: fromSubmitData.name,
          surname: fromSubmitData.surname,
          email: fromSubmitData.email,
          username: fromSubmitData.username,
          role: fromSubmitData.role,
          tenant: fromSubmitData.tenant,
          password: fromSubmitData.password,
          confirmPassword: fromSubmitData.confirmPassword,
        })
      );
      setRole("");
      setTenant("");
      handleClose();
      reset();
    }
  };

  useEffect(() => {
    if (user) {
      reset(user);
      setRole(user.role);
      setTenant(user.tenant);
    } else {
      reset();
      setRole("");
      setTenant("");
    }
  }, [user, reset]);

  return (
    <Dialog
      open={modalOpen}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <DialogTitle id="alert-dialog-title">
          {type === "add" ? "Add" : "Edit"} User{" "}
        </DialogTitle>
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
              id="emaill"
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
            <TextField
              select
              id="role"
              SelectProps={{
                MenuProps: MenuProps,
              }}
              label="Role"
              {...register("role")}
              value={role}
              onChange={(e) => {
                setRole(e.target.value);
              }}
              error={Boolean(formState?.errors?.role)}
              helperText={formState?.errors?.role?.message ?? ""}
            >
              {roles.map((role) => (
                <MenuItem key={role.id} value={role?.role}>
                  {role?.role}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              select
              id="tenant"
              SelectProps={{
                MenuProps: MenuProps,
              }}
              label="Tenant"
              {...register("tenant")}
              value={tenant}
              onChange={(e) => {
                setTenant(e.target.value);
              }}
              error={Boolean(formState?.errors?.tenant)}
              helperText={formState?.errors?.tenant?.message ?? ""}
            >
              {tenants.map((tenant) => (
                <MenuItem key={tenant.id} value={tenant?.tenant}>
                  {tenant?.tenant}
                </MenuItem>
              ))}
            </TextField>
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
