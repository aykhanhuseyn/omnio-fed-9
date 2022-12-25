import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		loggedIn: true,
	},
	reducers: {
		logIn: (state, action) => {
			state.loggedIn = true;
		},
		logOut: (state) => {
			state.loggedIn = false;
		},
	},
});

export const loginSelector = (state: RootState) => state.auth.loggedIn;

export const { logIn, logOut } = authSlice.actions;

export default authSlice.reducer;
