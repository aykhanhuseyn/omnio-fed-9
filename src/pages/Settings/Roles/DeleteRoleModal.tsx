import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../../redux/user.slice";
import { deleteRole } from "../../../redux/role.slice";
import { Roles } from "../../../models";
interface PropsDeleteModal {
  openDelete: boolean;
  handleCloseDelete: () => void;
  role: any;
}

export default function DeleteRoleModal({
  openDelete,
  handleCloseDelete,
  role,
}: PropsDeleteModal) {
  const dispatch = useDispatch();
  const deleteModal = () => {
    dispatch(deleteRole(role));
    handleCloseDelete();
  };
  console.log;
  return (
    <div>
      <Dialog
        open={openDelete}
        onClose={handleCloseDelete}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete user"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure want to delete this item?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="inherit" onClick={handleCloseDelete}>
            Cancel
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={deleteModal}
            autoFocus
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
