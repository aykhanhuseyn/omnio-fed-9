import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
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
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler } from "react-hook-form/dist/types";

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
  const { register, handleSubmit, formState, watch, getValues } =
  useForm<FormValues>({
    mode: 'onChange',
    shouldFocusError: true,
    reValidateMode: 'onChange',
  });
  const onSubmit: SubmitHandler<FormValues> = data => console.log(data);
  ;

  return (
    <Dialog
      fullScreen
      maxWidth="lg"
      open={openSearch}
      onClose={handleCloseSearch}
      TransitionComponent={Transition}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <DialogTitle sx={{ padding: 0 }} id="alert-dialog-title">
          {"Search "}
        </DialogTitle>
        <StyledWrapper sx={{ alignItems: "center", marginRight: "20px" }}>
          <Button
            variant="text"
            endIcon={
              <Badge
                sx={{ marginLeft: "8px" }}
                color="secondary"
                badgeContent={1}
              />
            }
          >
            Clear
          </Button>
        </StyledWrapper>
      </div>
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            marginBottom: "32px",
            "& .MuiTextField-root": { m: 1, width: "255px" },
          }}
        >
          <TextField
            size="medium"
            id="role"
            label="Role"
            variant="outlined"
            type="text"
            {...register('role')}
          />
        </Box>
        <DialogActions>
        <Button color="inherit" onClick={handleCloseSearch}>
          Cancel
        </Button>
        <Button
          sx={{ background: " #574B90" }}
          variant="contained"
          type="submit"
          autoFocus
        >
          Search
        </Button>
      </DialogActions>
      </form>
    </Dialog>
  );
}
