import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import "../../../styles/style.css";
import { TransitionProps } from "@mui/material/transitions";
import { DialogTitle,  MenuItem} from "@mui/material";
import { StyledWrapper } from "../../../components/Users";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
// import { roles, tenants } from "./AddModal";
import DialogActions from "@mui/material/DialogActions";
import Badge from "@mui/material/Badge/Badge";
import { useForm } from "react-hook-form";
import { FormValues } from "../../../models";
import { SubmitHandler } from "react-hook-form/dist/types";
import { useDispatch, useSelector } from "react-redux";
import { searchUser } from "../../../redux/user.slice";
import { MenuProps } from "./Modal";
import { roleSelector } from "../../../redux/role.slice";
import { tenantSelector } from "../../../redux/tenant.slice";
interface PropsSearchModal {
  openSearch: boolean;
  closeSearch: () => void;

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
  closeSearch,
  // handleChange,
  // selectValue
}: PropsSearchModal) {
  const [searchRole, setSearchRole] = React.useState("");
  const [searchTenant, setSearchTenant] = React.useState("");

  const roles = useSelector(roleSelector);
  const tenants = useSelector(tenantSelector);
  const dispatch=useDispatch()
  const { register, handleSubmit, reset } =
    useForm<FormValues>({
      mode: "onChange",
      shouldFocusError: true,
      reValidateMode: "onChange",
    });
    
    const onSubmit = (fromSubmitData: any) => {
      dispatch(searchUser(fromSubmitData));
      setSearchRole('');
      setSearchTenant('');
      closeSearch();
      reset();
    };
    
  
  
  // const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);
  return (
    <Dialog
      fullScreen
      maxWidth="lg"
      open={openSearch}
      onClose={closeSearch}
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
            id="emaill"
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
                      <TextField
              select
              id="role"
              SelectProps={{
                MenuProps:MenuProps
              }}    
              value={searchRole}
              label="Role"
              {...register("role")}
              onChange={(e) => {
                setSearchRole(e.target.value);
              }}

            >
              {roles.map((role) => (
                <MenuItem key={role.id} value={role?.role}>
                  {role?.role}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              select
              id="tenant"
              SelectProps={{
                MenuProps:MenuProps
              }}    
              value={searchTenant}
              label="Tenant"
              {...register("tenant")}
              onChange={(e) => {
                setSearchTenant(e.target.value);
              }}

            >
              {roles.map((role) => (
                <MenuItem key={role.id} value={role?.role}>
                  {role?.role}
                </MenuItem>
              ))}
            </TextField>

          {/* <Autocomplete
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
          /> */}
        </Box>
        <DialogActions>
          <Button color="inherit" onClick={closeSearch}>
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
