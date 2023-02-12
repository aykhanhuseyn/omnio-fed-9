import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../../redux/user.slice";
interface PropsDeleteModal {
  openDelete: boolean;
  handleCloseDelete: () => void;
  user: any;
}

export default function DeleteModal({
  openDelete,
  handleCloseDelete,
  user,
}: PropsDeleteModal) {
  const dispatch = useDispatch();
  const deleteModal = () => {
    dispatch(deleteUser(user));
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
            sx={{ background: " #574B90" }}
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
