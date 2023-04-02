// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import auth from "./auth.slice";
// import users from "./user.slice";
// import roles from "./role.slice";
// import tenants from "./tenant.slice";

// const reducer = combineReducers({
//   auth,
//   users,
//   roles,
//   tenants
// });

// const store = configureStore({
//   reducer,
//   devTools: process.env.NODE_ENV === "development",
// });
// export type RootState = ReturnType<typeof store.getState>;

// export default store;



import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import auth from "./auth.slice";
import users from "./user.slice";
import roles from "./role.slice";
import tenants from "./tenant.slice";

const persistConfig = {
  key: 'root',
  storage,
};

const reducer = combineReducers({
  auth,
  users,
  roles,
  tenants
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV === "development",
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  })
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export default store;




