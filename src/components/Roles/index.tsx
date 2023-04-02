import * as React from "react";
import * as _ from 'lodash'
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Skeleton } from "@mui/material";
import {filtersSelector, roleSelector } from "../../redux/role.slice";
import type { Data, Order, Roles } from "../../models";
import { Modal } from "../../components/Modal/Roles/Modal";
import DeleteModal from "../../components/Modal/Roles/DeleteModal";
import {EnhancedTableHead} from '../../components/Roles/EnhancedTableHead'
import {EnhancedTableToolbar} from '../../components/Roles/EnhancedTableToolbar'
import { StyledTypography } from "../Users";
function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

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
  const stabilizedThis = _.map(array, (el, index) => [el, index] as [T, number]);

  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}
export default function Roles() {
  const roles = useSelector(roleSelector);
  const filters = useSelector(filtersSelector);
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof Data>("role");
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [IDToDelete, setIDToDelete] = React.useState<string | null>(null);
  const [roleToEdit, setRoleToEdit] = React.useState<Roles | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [editModalOpen, setEditModalOpen] = React.useState(false);

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
    setEditModalOpen(true);
  };
  const closeEdit = () => {
    setRoleToEdit(null);
    setEditModalOpen(false);
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
      <EnhancedTableToolbar
        roles={roles}
        numSelected={selected.length}
        loading={loading}
      />
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
              {stableSort(
                _.filter(roles, { ...filters }),
                getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((role, index) => {
                  const isItemSelected = isSelected(role.role);
                  const labelId = `enhanced-table-checkbox-${index}`;
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
        <Modal
          type="edit"
          role={roleToEdit}
          modalOpen={editModalOpen}
          handleClose={closeEdit}
        />

        <DeleteModal id={IDToDelete} handleClose={handleCloseDelete} />

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
