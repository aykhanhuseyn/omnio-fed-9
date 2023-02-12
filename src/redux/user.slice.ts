import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cloneDeep, filter, find, uniqueId } from "lodash";
import { LoginUser, Users } from "../models";
import type { RootState } from "./store";
interface State {
  users: Users[];
  loading: boolean;
}

const initialState: State = {
  users: [],
  loading: false,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, { payload }: PayloadAction<Users>) => {
      const user: Users = {
        id: payload.id,
        role: payload.role,
        name: payload.name,
        username: payload.username,
        surname: payload.surname,
        email: payload.email,
        password: payload.password,
        confirmPassword: payload.confirmPassword,
        tenant: payload.tenant,
      };
      state.users.push(user);
    },

    deleteUser: (state, action: PayloadAction<Users>) => {
      state.users = state.users.filter((user) => user.id !== action.payload.id);
    },
    editUser: (state, { payload }: PayloadAction<Users>) => {
      state.users = state.users.map((user) =>
        user.id === payload.id ? { ...payload } : user
      );
    },
  },
});

export const userSelector = (state: RootState) => state.users.users;

export const { addUser, deleteUser, editUser } = userSlice.actions;

export default userSlice.reducer;
