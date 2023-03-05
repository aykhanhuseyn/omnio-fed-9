import { object, string, ref } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
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
import type { FormValues, Roles } from "../../../models";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { editRole } from "../../../redux/role.slice";
interface EditRoleModalProps {
	handleClose: () => void;
	role: Roles | null;
}

const schema = object().shape({
  role: string().required("Role is required"),
});

export const EditRoleModal = ({ role, handleClose }: EditRoleModalProps) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState, reset } =
    useForm<FormValues>({
      mode: "onChange",
      shouldFocusError: true,
      reValidateMode: "onChange",
      resolver: yupResolver(schema),
    });

    const onSubmit = (fromSubmitData: any) => {
      console.log('onSubmit', fromSubmitData);
      dispatch(
        editRole({
          id: role?.id!,
          role: fromSubmitData.role,
        }),
      );
      reset();
      handleClose();

    };
  
    return (
    <Dialog
    open={Boolean(role)}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <DialogTitle id="alert-dialog-title">{"Add , Edit role "}</DialogTitle>
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
            defaultValue={role?.role}
          />
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















