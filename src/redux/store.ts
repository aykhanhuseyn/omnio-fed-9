import { combineReducers, configureStore } from "@reduxjs/toolkit";
import auth from "./auth.slice";
import users from "./user.slice";
import roles from "./role.slice";
import tenants from "./tenant.slice";

const reducer = combineReducers({
  auth,
  users,
  roles,
  tenants
});

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV === "development",
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
