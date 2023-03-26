import { object, string, ref } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { uniqueId } from "lodash";
import type { FormValues, Roles } from "../../../models";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addRole, editRole } from "../../../redux/role.slice";
import { useEffect } from "react";
interface ModalProps {
	role?: Roles | null;
    type:string;
    modalOpen:boolean;
    // setModalOpen:any;
    handleClose:()=>void
}

const schema = object().shape({
  role: string().required("Role is required"),
});

export const Modal = ({ role, type, modalOpen,handleClose}: ModalProps) => {
  const dispatch = useDispatch();
//   const handleClose = () => setModalOpen(false);
  const { register, handleSubmit, formState, reset } =
    useForm<FormValues>({
      mode: "onChange",
      shouldFocusError: true,
      reValidateMode: "onChange",
      resolver: yupResolver(schema),
    });
    const onSubmit = (fromSubmitData: any) => {
        if (type === "edit") {
          dispatch(editRole(fromSubmitData));
          handleClose();
          reset();
        }
        if (type === "add") {
          dispatch(
            addRole({
                id: uniqueId(),
                role: fromSubmitData.role,
              })
        
          );
          handleClose();
          reset();
        }
      };
    
      useEffect(() => {
        if (role) {
          reset(role);
        } else {
          reset();
        }
      }, [role, reset]);
    
    return (
    <Dialog
    // open={Boolean(role)}
    // onClose={handleClose}
    open={modalOpen}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <DialogTitle id="alert-dialog-title">          {type === "add" ? "Add" : "Edit"} Role{" "}
</DialogTitle>
        <DialogContent
          sx={{
            "& .MuiTextField-root": { m: 1, width: "255px" },
          }}
        >
          <TextField
            size="medium"
            id="role"
            label="Role"
            variant="outlined"
            type="text"
            {...register("role")}
            error={Boolean(formState?.errors?.role)}
            helperText={formState?.errors?.role?.message ?? ""}
          />
        </DialogContent>
        <DialogActions sx={{ paddingRight: "30px", paddingLeft: "30px" }}>
          <Button color="inherit"  onClick={handleClose}>
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
