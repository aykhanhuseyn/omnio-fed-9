import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch } from "react-redux";
import { deleteRole } from "../../../redux/role.slice";
interface PropsDeleteModal {
	handleClose: () => void;
	id: string | null;
}

 function DeleteRoleModal({ handleClose, id }: PropsDeleteModal) {
  const dispatch = useDispatch();
  const deleteModal = () => {
	dispatch(deleteRole({ id: id! }));
	handleClose();
};
return (
    <div>
      <Dialog
        open={Boolean(id)}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete role"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure want to delete this item?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="inherit" onClick={handleClose}>
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

export default React.memo(DeleteRoleModal);


