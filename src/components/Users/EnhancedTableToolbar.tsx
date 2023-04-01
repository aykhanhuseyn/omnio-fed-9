import React from 'react'
import { useDispatch } from "react-redux";
import { alpha } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button, Skeleton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import Badge from "@mui/material/Badge";
import { resetUser } from "../../redux/user.slice";
import SearchModal from "../../components/Modal/Users/SearchModal";
import type {Users } from "../../models";
import { Modal } from "../../components/Modal/Users/Modal";
import { StyledWrapper } from './index';

interface EnhancedTableToolbarProps {
    numSelected: number;
    loading: boolean;
    users: Users[];
  }
  
export const EnhancedTableToolbar = ({ numSelected, loading, users }: EnhancedTableToolbarProps) => {
    const dispatch = useDispatch();
    const [modalOpen, setModalOpen] = React.useState(false);
    const closeEdit = () => {
      setModalOpen(false);
    };
  
    const [openSearch, setOpenSearch] = React.useState(false);
    const closeSearch = () => {
      setOpenSearch(false);
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
              "Users"
            )}
          </Typography>
        )}
        <StyledWrapper>
          {loading ? (
            <Skeleton variant="rounded" width="88px" height="36px" />
          ) : (
            <Button
              disabled={users.length === 0 ? true : false}
              sx={{ marginRight: "6px" }}
              variant="text"
              onClick={() => {
                dispatch(resetUser());
              }}
              endIcon={
                <Badge
                  sx={{ marginLeft: "8px" }}
                  color="primary"
                  badgeContent={users.length}
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
              color="inherit"
              size="medium"
              onClick={()=>setOpenSearch(true)}
              startIcon={<SearchIcon />}
            >
              Search
            </Button>
          )}
          <SearchModal
            openSearch={openSearch}
            closeSearch={closeSearch}
          />
          {loading ? (
            <Skeleton variant="rounded" width="88px" height="36px" />
          ) : (
            <Button
              variant="contained"
              size="medium"
              onClick={() => setModalOpen(true)}
              startIcon={<AddIcon />}
            >
              Add
            </Button>
          )}
          <Modal
            handleClose={closeEdit}
            type="add"
            modalOpen={modalOpen}
          />
        </StyledWrapper>
      </Toolbar>
    );
  
}
