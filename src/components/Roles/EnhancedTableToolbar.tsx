import * as React from "react";
import { useDispatch } from "react-redux";
import { alpha } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Badge, Button, Skeleton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import { resetRole } from "../../redux/role.slice";
import type {Roles } from "../../models";
import { Modal } from "../../components/Modal/Roles/Modal";
import SearchModal from "../../components/Modal/Roles/SearchModal";
import { StyledWrapper } from "../Users";
interface EnhancedTableToolbarProps {
    numSelected: number;
    loading: boolean;
    roles: Roles[];
  }
  
export const EnhancedTableToolbar = ({ numSelected, loading, roles }:EnhancedTableToolbarProps) => {
    const [modalOpen, setModalOpen] = React.useState(false);
    const dispatch = useDispatch();
    const [openSearch, setOpenSearch] = React.useState(false);
    const handleClickOpenSearch = () => {
      setOpenSearch(true);
    };
    const handleCloseSearch = () => {
      setOpenSearch(false);
    };
    const closeEdit = () => {
      setModalOpen(false);
    };
  
  
    return (
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          ...(numSelected > 0 && {
            bgcolor: (theme) =>
              alpha(
                theme.palette.primary.main,
                theme.palette.action.activatedOpacity
              ),
          }),
        }}
      >
        {numSelected > 0 ? (
          <Typography
            sx={{ flex: "1 1 100%" }}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            {numSelected} selected
          </Typography>
        ) : (
          <Typography
            sx={{ flex: "1 1 100%" }}
            variant="h6"
            id="tableTitle"
            component="div"
            color="#212121"
          >
            {loading ? (
              <Skeleton variant="text" width="180px" animation="wave" />
            ) : (
              "Roles"
            )}
          </Typography>
        )}
        <StyledWrapper>
          {loading ? (
            <Skeleton variant="rounded" width="88px" height="36px" />
          ) : (
            <Button
              disabled={roles.length === 0 ? true : false}
              sx={{ marginRight: "6px" }}
              variant="text"
              onClick={() => {
                dispatch(resetRole());
              }}
              endIcon={
                <Badge
                  sx={{ marginLeft: "8px" }}
                  color="primary"
                  badgeContent={roles.length}
                />
              }
            >
              Clear
            </Button>
          )}
          {loading ? (
            <Skeleton variant="rounded" width="88px" height="36px" />
          ) : (
            <Button
              startIcon={<SearchIcon />}
              color="inherit"
              size="medium"
              onClick={handleClickOpenSearch}
            >
              Search
            </Button>
          )}
          {loading ? (
            <Skeleton variant="rounded" width="88px" height="36px" />
          ) : (
            <Button
              startIcon={<AddIcon />}
              variant="contained"
              size="medium"
              color="primary"
              onClick={() => setModalOpen(true)}
            >
              Add
            </Button>
          )}
          <SearchModal
            openSearch={openSearch}
            handleCloseSearch={handleCloseSearch}
          />
          <Modal
            type="add"
            modalOpen={modalOpen}
            handleClose={closeEdit}
  
          />
        </StyledWrapper>
      </Toolbar>
    );
  
}
