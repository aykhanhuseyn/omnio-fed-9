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
import React from "react";
interface Props {
  open: boolean;
  handleClose: () => void;
}
const roles = [{ label: "Admin" }, { label: "Agent" }, { label: "Superviser" }];

export const AddModal = ({ open, handleClose }: Props) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Add , Edit user "}</DialogTitle>
        <DialogContent>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{
              marginBottom:'20px',
              "& .MuiTextField-root": {m:1, width: "255px" },
            }}
          >
            <div style={{marginBottom:'28px'}}>
              <TextField
                size="medium"
                id="name"
                label="Name"
                variant="outlined"
              />
              <TextField
                size="medium"
                id="surname"
                label="Surname"
                variant="outlined"
              />
            </div>
            <div style={{marginBottom:'28px'}}>
              <TextField
                size="medium"
                id="email"
                label="Email"
                variant="outlined"
              />
              <TextField
                size="medium"
                id="username"
                label="Username"
                variant="outlined"
              />
            </div>
            <div style={{display:'flex', marginBottom:'28px'}}>
              <Autocomplete
                disablePortal
                id="addedRoles"
                options={roles}
                renderInput={(params) => (
                  <TextField {...params} label="Role" variant="outlined" />
                )}
              />
              <Autocomplete
                disablePortal
                id="addedTenants"
                options={roles}
                renderInput={(params) => (
                  <TextField {...params} label="Tenant" variant="outlined" />
                )}
              />
            </div>
            <div>
              <TextField
                id="password"
                label="Password"
                variant="outlined"
                size="medium"
              />
              <TextField
                id="confirmpassword"
                label="Confirm password"
                size="medium"
                variant="outlined"
              />
            </div>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose} autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
