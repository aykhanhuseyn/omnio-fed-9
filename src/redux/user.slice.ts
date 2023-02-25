import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { cloneDeep, filter, find, findIndex, uniqueId } from 'lodash';
import { LoginUser, Users } from '../models';
import type { RootState } from './store';
interface State {
	users: Users[];
	loading: boolean;
}

const initialState: State = {
	users: [],
	loading: false,
};

const userSlice = createSlice({
	name: 'users',
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

//ERROR deleteUser
		deleteUser: (state, { payload }: PayloadAction<Pick<Users, 'id'>>) => {
			console.log('redux', payload.id);
			const users = cloneDeep(state.users);
			return { ...state, users: users.filter((user) => user.id !== payload.id) };
		},
		editUser: (state, { payload }: PayloadAction<Users>) => {
			const index = findIndex(state.users, { id: payload.id });
			console.log('index', index, payload);
			if (index !== -1) {
				state.users[index] = payload;
			}
		},
	},
});

export const userSelector = (state: RootState) => state.users.users;

export const { addUser, deleteUser, editUser } = userSlice.actions;

export default userSlice.reducer;
