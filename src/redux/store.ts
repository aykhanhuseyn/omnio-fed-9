import { combineReducers, configureStore } from "@reduxjs/toolkit";
import auth from "./auth.slice";
import users from "./user.slice";
import roles from "./role.slice";

const reducer = combineReducers({
  auth,
  users,
  roles,
});

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV === "development",
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
