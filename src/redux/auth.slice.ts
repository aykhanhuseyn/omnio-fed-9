import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { find, findIndex } from 'lodash';
import { users } from '../data/users';
import { LoginUser, User } from '../models';
import type { RootState } from './store';

interface State {
	user: User | null;
	loggedIn: boolean;
}

const initialState: State = {
	user: null,
	loggedIn: false,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logIn: (state, { payload }: PayloadAction<LoginUser>) => {
			const found = find(users, {
				username: payload.username,
				password: payload.password,
			});
			if (found) {
				state.user = found;
				state.loggedIn = true;
			}
		},
		logOut: (state) => {
			state.loggedIn = false;
		},
		editUser: (state, payload: PayloadAction<User>) => {
			const index=findIndex(state.user, {id:payload.payload.id})
			if(index!==-1){
				state.user[index]=payload.payload;
			}

		},

		// editUser: (state, payload: PayloadAction<User>) => {
		// 	state.user = {
		// 		...state.user,
		// 		...payload,
		// 	}
		// },
	},
});

export const loginSelector = (state: RootState) => state.auth.loggedIn;
export const userSelector = (state: RootState) => state.auth.user;

export const { logIn, logOut } = authSlice.actions;

export default authSlice.reducer;
