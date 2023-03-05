import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import "../../../styles/style.css";
import { TransitionProps } from "@mui/material/transitions";
import { DialogTitle } from "@mui/material";
import { StyledWrapper } from "../Users/Users";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import DialogActions from "@mui/material/DialogActions";
import Badge from "@mui/material/Badge/Badge";
import { useForm } from "react-hook-form";
import { FormValues } from "../../../models";
import { SubmitHandler } from "react-hook-form/dist/types";
import { useDispatch } from "react-redux";
import { searchRole } from "../../../redux/role.slice";
interface PropsSearchModal {
  openSearch: boolean;
  handleCloseSearch: () => void;
}
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return (
    <Slide direction="down" ref={ref} {...props} style={{ height: "auto" }} />
  );
});

export default function SearchRoleModal({
  openSearch,
  handleCloseSearch,
}: PropsSearchModal) {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState, reset } = useForm<FormValues>({
    mode: "onChange",
    shouldFocusError: true,
    reValidateMode: "onChange",
  });
  // const onSubmit: SubmitHandler<FormValues> = data => console.log(data.role);
  const onSubmit = (role: any) => {
    dispatch(
      searchRole({
        role: role?.role,
      })
    );
    handleCloseSearch();
    reset();
  };
  return (
    <Dialog
      fullScreen
      maxWidth="lg"
      open={openSearch}
      onClose={handleCloseSearch}
      TransitionComponent={Transition}
    >
     <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <DialogTitle sx={{ padding: 0 }} id="alert-dialog-title">
          {"Search "}
        </DialogTitle>
        {/* <StyledWrapper sx={{ alignItems: "center", marginRight: "20px" }}> */}
          <Button
            type="reset"
            variant="text"
            // endIcon={
            //   <Badge
            //     sx={{ marginLeft: "8px" }}
            //     color="primary"
            //     badgeContent={1}
            //   />
            // }
          >
            Clear All
          </Button>
        {/* </StyledWrapper> */}
      </div>
        <Box
          sx={{
            display: "flex",
            gap: "26px 3%",
            flexWrap: "wrap",
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
          />
        </Box>
        <DialogActions>
          <Button color="inherit" onClick={handleCloseSearch}>
            Cancel
          </Button>
          <Button color="primary" variant="contained" type="submit" autoFocus>
            Search
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
