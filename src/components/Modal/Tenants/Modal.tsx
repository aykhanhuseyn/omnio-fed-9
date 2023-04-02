import { object, string } from "yup";
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
import type { FormValues, Tenants } from "../../../models";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addTenant, editTenant } from "../../../redux/tenant.slice";
interface ModalProps {
	tenant?: Tenants | null;
    type:string;
    modalOpen:boolean;
    // setModalOpen:any;
    handleClose:()=>void
}

const schema = object().shape({
  tenant: string().required("Tenant is required"),
});

export const Modal = ({ tenant, type, modalOpen,handleClose}: ModalProps) => {
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
          dispatch(editTenant(fromSubmitData));
          handleClose();
          reset();
        }
        if (type === "add") {
          dispatch(
            addTenant({
                id: uniqueId(),
                tenant: fromSubmitData.tenant,
              })
        
          );
          handleClose();
          reset();
        }
      };
    
      useEffect(() => {
        if (tenant) {
          reset(tenant);
        } else {
          reset();
        }
      }, [tenant, reset]);
    
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
        <DialogTitle id="alert-dialog-title">          {type === "add" ? "Add" : "Edit"} Tenant{" "}
</DialogTitle>
        <DialogContent
          sx={{
            "& .MuiTextField-root": { m: 1, width: "255px" },
          }}
        >
          <TextField
            size="medium"
            id="tenant"
            label="Tenant"
            variant="outlined"
            type="text"
            {...register("tenant")}
            error={Boolean(formState?.errors?.tenant)}
            helperText={formState?.errors?.tenant?.message ?? ""}
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
