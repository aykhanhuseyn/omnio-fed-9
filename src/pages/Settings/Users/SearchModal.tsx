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
import { StyledWrapper } from "./Users";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { roles, tenants } from "./AddModal";
import DialogActions from "@mui/material/DialogActions";
import Badge from "@mui/material/Badge/Badge";

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
    <Slide direction="down" ref={ref} {...props} style={{ height: "300px" }} />
  );
});

export default function SearchModal({
  openSearch,
  handleCloseSearch,
}: PropsSearchModal) {
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
        <StyledWrapper sx={{ alignItems: "center" }}>
        <Button variant="text" endIcon={<Badge sx={{marginLeft:'8px'}} color="secondary" badgeContent={1}  />}>
        Clear
      </Button>
        </StyledWrapper>
      </div>
      <form autoComplete="off">
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            marginBottom: "20px",
            "& .MuiTextField-root": { m: 1, width: "255px" },
          }}
        >
          <TextField
            size="medium"
            id="name"
            label="Name"
            variant="outlined"
            type="text"
          />
          <TextField
            size="medium"
            id="surname"
            label="Surname"
            variant="outlined"
            type="text"
          />
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
            type="text"
          />
          <Autocomplete
            disablePortal
            id="addedRoles"
            options={roles}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Role"
                variant="outlined"
                id="role"
              />
            )}
          />
          <Autocomplete
            disablePortal
            id="addedTenants"
            options={tenants}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Tenant"
                id="tenant"
                variant="outlined"
              />
            )}
          />
        </Box>
      </form>
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
    </Dialog>
  );
}
