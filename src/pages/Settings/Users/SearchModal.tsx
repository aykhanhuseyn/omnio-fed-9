import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
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
import { useForm } from "react-hook-form";
import { FormValues } from "../../../models";
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

export default function SearchModal({
  openSearch,
  handleCloseSearch,
}: PropsSearchModal) {
  const { register, handleSubmit, formState, watch, getValues } =
    useForm<FormValues>({
      mode: "onChange",
      shouldFocusError: true,
      reValidateMode: "onChange",
    });
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);
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
                color="primary"
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
            gap: "26px 3%",
            flexWrap: "wrap",
            "& .MuiTextField-root": { m: 1, width: "255px" },
          }}
        >
          <TextField
            size="medium"
            id="name"
            label="Name"
            variant="outlined"
            type="text"
            {...register("name")}
          />
          <TextField
            size="medium"
            id="surname"
            label="Surname"
            variant="outlined"
            type="text"
            {...register("surname")}
          />
          <TextField
            size="medium"
            id="email"
            label="Email"
            variant="outlined"
            {...register("email")}
          />
          <TextField
            size="medium"
            id="username"
            label="Username"
            variant="outlined"
            type="text"
            {...register("username")}
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
                {...register("role")}
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
                {...register("tenant")}
              />
            )}
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
