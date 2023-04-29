import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { find, findIndex } from 'lodash';
import { users } from '../data/users';
import { LoginUser, User } from '../models';
import type { RootState } from './store';

interface State {
	user: User | any;
	users: User[];
	loggedIn: boolean;
	error: string | null;
}

const initialState: State = {
	user: null,
	users,
	loggedIn: false,
	error: null,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logIn: (state, { payload }: PayloadAction<LoginUser>) => {
			state.error = null;
			const found = find(state.users, {
				username: payload.username,
				password: payload.password,
			});
			if (found) {
				state.user = found;
				state.loggedIn = true;
			} else {
				state.error="username or email are incorrect"
			}
		},
		logOut: (state) => {
			state.error = null;
			state.loggedIn = false;
		},
		editUser: (state, { payload }: PayloadAction<Partial<User>>) => {
			state.error = null;
			const index = state.users.findIndex(x => x.username === state.user?.username);
			const user = {
				...state.user,
				...payload,
			};

			state.user = user;
			if (index !== -1) state.users[index] = user;
		},
	},
});

export const loginSelector = (state: RootState) => state.auth.loggedIn;
export const userSelector = (state: RootState) => state.auth.user;
export const authErrorSelector = (state: RootState) => state.auth.error;

export const { logIn, logOut, editUser } = authSlice.actions;

export default authSlice.reducer;