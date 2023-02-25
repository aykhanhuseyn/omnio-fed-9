import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cloneDeep, filter, find, uniqueId } from "lodash";
import { LoginUser, Roles, Users } from "../models";
import type { RootState } from "./store";
interface State {
  roles: Roles[];
  loading: boolean;
}
const initialState: State = {
  roles: [],
  loading: false,
};

const roleSlice = createSlice({
  name: "roles",
  initialState,
  reducers: {
    addRole: (state, { payload }: PayloadAction<Roles>) => {
      const role: Roles = {
        id: payload.id,
        role: payload.role,
      };
      state.roles.push(role);
    },
    deleteRole: (state, { payload }: PayloadAction<Roles>) => {
      state.roles = state.roles.filter((role) => role.id !== payload.id);
    },
    editRole: (state, { payload }: PayloadAction<Roles>) => {
      state.roles = state.roles.map((role) =>
        role.id === payload.id ? { ...payload } : role
      );
    },
  },
});

export const roleSelector = (state: RootState) => state.roles.roles;

export const { addRole, deleteRole, editRole } = roleSlice.actions;

export default roleSlice.reducer;
