import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Box,
  TextField,
  Autocomplete,
} from "@mui/material";
import { uniqueId } from "lodash";
import { FormValues } from "../../../models";
import { useForm, SubmitHandler } from "react-hook-form";
interface Props {
  open: boolean;
  handleClose: () => void;
}
const roles = ["Admin", "Agent", "Superviser"];
const tenants = ["Admin", "Agent", "Superviser"];

export const AddModal = ({ open, handleClose }: Props) => {
  const {register,handleSubmit}=useForm()
  const onSubmit=(data)=>console.log(data)
  return (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
            <form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>

        <DialogTitle id="alert-dialog-title">{"Add , Edit user "}</DialogTitle>
        <DialogContent>
          <Box
            component="div"
            sx={{
              marginBottom: "20px",
              "& .MuiTextField-root": { m: 1, width: "255px" },
            }}
          >
            <div style={{ marginBottom: "28px" }}>
              <TextField
                size="medium"
                id="name"
                label="Name"
                variant="outlined"
                type="text"
                {...register("name", { required: true })}
              />
              <TextField
                size="medium"
                id="surname"
                label="Surname"
                variant="outlined"
                type="text"
                {...register("surname", { required: true })}
              />
            </div>
            <div style={{ marginBottom: "28px" }}>
              <TextField
                size="medium"
                id="email"
                label="Email"
                variant="outlined"
                type="email"
                {...register("email", { required: true })}
              />
              <TextField
                size="medium"
                id="username"
                label="Username"
                variant="outlined"
                type="text"
                {...register("username", { required: true })}
              />
            </div>
            <div style={{ display: "flex", marginBottom: "28px" }}>
              <Autocomplete
                disablePortal
                id="addedRoles"
                options={roles}
                renderInput={(params) => (
                  <TextField {...params} label="Role" variant="outlined" id="role"  {...register("role", { required: true })}
                  />
                )}
              />
              <Autocomplete
                disablePortal
                id="addedTenants"
                options={tenants}
                renderInput={(params) => (
                  <TextField {...params} label="Tenant" id="tenant" variant="outlined" {...register("tenant", { required: true })} />
                )}
              />
            </div>
            <div>
              <TextField
                id="password"
                label="Password"
                variant="outlined"
                size="medium"
                type="password"
                {...register("password", { required: true })}
              />
              <TextField
                id="confirmpassword"
                label="Confirm password"
                size="medium"
                variant="outlined"
                type="password"
                {...register("password", { required: true })}
              />
            </div>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" type="submit" autoFocus>
            Save
          </Button>
        </DialogActions>
        </form>
      </Dialog>
  );
};
