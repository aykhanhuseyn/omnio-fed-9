import * as React from "react";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { visuallyHidden } from "@mui/utils";
import { Badge, Button, Skeleton } from "@mui/material";
import { styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import { editRole, resetRole, roleSelector } from "../../../redux/role.slice";
import { AddRoleModal } from "./AddRoleModal";
import DeleteRoleModal from "./DeleteRoleModal";
import { EditRoleModal } from "./EditRoleModal";
import SearchRoleModal from "./SearchRoleModal";
import type { Roles } from "../../../models";
interface Data extends Roles {
  action: string;
}

const StyledWrapper = styled("div")`
  display: flex;
  gap: 12px;
`;
const StyledTypography = styled(Typography)`
  margin: 28px;
  text-align: center;
  color: ${({ theme }) => theme.palette.primary.main};
`;

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (a: { [key in Key]: string }, b: { [key in Key]: string }) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: "role",
    numeric: false,
    disablePadding: true,
    label: "Role",
  },
  {
    id: "action",
    numeric: true,
    disablePadding: false,
    label: "Action",
  },
];

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
  loading: boolean;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { order, orderBy, onRequestSort, loading } = props;
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{ color: "#616161" }}
          >
            {loading ? (
              <Skeleton
                sx={{ display: "inline-block" }}
                animation="wave"
                width="40px"
                variant="text"
              />
            ) : headCell.id === "action" ? (
              headCell.label
            ) : (
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </Box>
                ) : null}
              </TableSortLabel>
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

interface EnhancedTableToolbarProps {
  numSelected: number;
  loading: boolean;
  roles:Roles[]
}

function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
  const dispatch=useDispatch()
  const [openSearch, setOpenSearch] = React.useState(false);
  const handleClickOpenSearch = () => {
    setOpenSearch(true);
  };
  const handleCloseSearch = () => {
    setOpenSearch(false);
  };

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const { numSelected, loading,roles } = props;

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
            sx={{ marginRight: "6px" }}
            variant="text"
            onClick={() => {
              dispatch(resetRole());
            }}
            endIcon={
              <Badge
                sx={{ marginLeft: "8px" }}
                color="primary"
                badgeContent={roles.length ? roles.length : "0"}
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
            onClick={handleClickOpen}
          >
            Add
          </Button>
        )}
        <SearchRoleModal
          openSearch={openSearch}
          handleCloseSearch={handleCloseSearch}
        />
        <AddRoleModal open={open} handleClose={handleClose} />
      </StyledWrapper>
    </Toolbar>
  );
}

export default function Roles() {
  const roles = useSelector(roleSelector);
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof Data>("role");
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [IDToDelete, setIDToDelete] = React.useState<string | null>(null);
  const [roleToEdit, setRoleToEdit] = React.useState<Roles | null>(null);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const handleClickOpenDelete = React.useCallback((id: string) => {
    setIDToDelete(id);
  }, []);
  const handleCloseDelete = React.useCallback(() => {
    setIDToDelete(null);
  }, []);

    const openEdit = (role: Roles) => {
    setRoleToEdit(role);
  };
  const closeEdit = () => {
    setRoleToEdit(null);
  };

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - roles.length) : 0;

  return (
    <Box sx={{ width: "100%" }}>
      <EnhancedTableToolbar roles={roles} numSelected={selected.length} loading={loading} />
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table sx={{ minWidth: 1500 }} aria-labelledby="tableTitle">
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={roles.length}
              loading={loading}
            />
            <TableBody>
              {stableSort(roles, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((role, index) => {
                  const isItemSelected = isSelected(role.role);
                  const labelId = `enhanced-table-checkbox-${index}`;
				  console.log('table map', role);

                  return (
                    <TableRow
                      hover
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={role.id}
                      selected={isItemSelected}
                    >
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        sx={{ color: "#212121" }}
                      >
                        {loading ? (
                          <Skeleton
                            sx={{ display: "inline-block" }}
                            animation="wave"
                            width="88px"
                          />
                        ) : (
                          role.role
                        )}
                      </TableCell>
                      <TableCell align="right">
                        {loading ? (
                          <Skeleton
                            sx={{ display: "inline-block" }}
                            animation="wave"
                            width="88px"
                          />
                        ) : (
                          <>
                            <IconButton onClick={() => openEdit(role)}>
                              <EditIcon
                                sx={{
                                  width: "20px",
                                  height: "20px",
                                  color: "#616161",
                                }}
                              />
                            </IconButton>
                            <IconButton
                              onClick={() => handleClickOpenDelete(role.id)}
                            >
                              <DeleteIcon
                                sx={{
                                  width: "20px",
                                  height: "20px",
                                  color: "#616161",
                                }}
                              />
                            </IconButton>
                          </>
                        )}
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
          {roles.length === 0 && (
            <StyledTypography variant="subtitle1">
              {loading ? (
                <Skeleton
                  sx={{ display: "inline-block" }}
                  width="200px"
                  variant="rounded"
                  animation="wave"
                />
              ) : (
                "There is no data in the table"
              )}
            </StyledTypography>
          )}
        </TableContainer>
        <EditRoleModal
          role={roleToEdit}
          handleClose={closeEdit}
        />
        <DeleteRoleModal
          id={IDToDelete}
          handleClose={handleCloseDelete}
        />

        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={roles.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{ color: "#212121" }}
        />
      </Paper>
    </Box>
  );
}
