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
import type { FormValues, Users } from "../../../models";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../../../redux/user.slice";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import React from "react";
import {roleSelector} from '../../../redux/role.slice'
import { MenuProps } from "./AddModal";


interface PropsEdit {
  handleClose: () => void;
  user: Users | null;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selectValue:string;

}

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
  	.required('Role is required'),
  tenant: string()
  	// .oneOf(roles, `Rolu must be one of ${roles.join(', ')}`)
  	.required('Tenant is required'),
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

export const EditModal = ({ user, handleClose,handleChange,selectValue}: PropsEdit) => {
	const roles=useSelector(roleSelector)

  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const dispatch = useDispatch();

  const { register, handleSubmit, formState, reset } = useForm<FormValues>({
    mode: "onChange",
    shouldFocusError: true,
    reValidateMode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit = (fromSubmitData: any) => {
    console.log("onSubmit", fromSubmitData);
    dispatch(
      editUser({
        id: user?.id!,
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
    handleClose();
    reset();
  };

  return (
    <Dialog
      open={Boolean(user)}
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
              defaultValue={user?.name}
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
              defaultValue={user?.surname}
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
              defaultValue={user?.email}
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
              defaultValue={user?.username}
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
                MenuProps:MenuProps
              }}    
              value={selectValue}
			  defaultValue={user?.role}
              label="Role"
              {...register("role")}
              error={Boolean(formState?.errors?.role)}
              helperText={formState?.errors?.role?.message ?? ""}
              onChange={handleChange}

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
                MenuProps:MenuProps
              }}    
              value={selectValue}
			  defaultValue={user?.role}
              label="Tenant"
              {...register("tenant")}
              error={Boolean(formState?.errors?.tenant)}
              helperText={formState?.errors?.tenant?.message ?? ""}
              onChange={handleChange}

            >
              {roles.map((role) => (
                <MenuItem key={role.id} value={role?.role}>
                  {role?.role}
                </MenuItem>
              ))}
            </TextField>

            {/* <TextField
              select
              {...register("role")}
              error={Boolean(formState?.errors?.role)}
              helperText={formState?.errors?.role?.message ?? ""}
              id="demo-simple-select"
              value={selectValue}
              label="Role"
              onChange={handleChange}
            >
              {roles.map((role) => (
                <MenuItem key={role.id} value={role.role}>
                  {role.role}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              select
              {...register("tenant")}
              error={Boolean(formState?.errors?.tenant)}
              helperText={formState?.errors?.tenant?.message ?? ""}
              id="demo-simple-select"
              value={selectValue}
              label="Tenant"
              onChange={handleChange}
            >
              {roles.map((role) => (
                <MenuItem key={role.id} value={role.role}>
                  {role.role}
                </MenuItem>
              ))}
            </TextField> */}

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
              defaultValue={user?.password}
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
              defaultValue={user?.confirmPassword}
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
