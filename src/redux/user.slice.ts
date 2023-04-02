import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { cloneDeep, filter, find, findIndex, omitBy, uniqueId } from 'lodash';
import type { LoginUser, Users } from '../models';
import type { RootState } from './store';

interface State {
	users: Users[];
	loading: boolean;
	filters: Partial<Users>;
}

const initialState: State = {
	users: [],
	loading: false,
	filters: {} as any,
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

		deleteUser: (state, { payload }: PayloadAction<Pick<Users, 'id'>>) => {
			const users = cloneDeep(state.users);
			return { ...state, users: users.filter((user) => user.id != payload.id) };
		},
		editUser: (state, { payload }: PayloadAction<Users>) => {
			const index = findIndex(state.users, { id: payload.id });
			if (index !== -1) {
				state.users[index] = payload;
			}
		},
		searchUser: (state, { payload }: PayloadAction<Users>) => {
			state.filters = omitBy(payload, (val) => !val);
		},
		resetUser:()=>{
			return {...initialState}
		}
	},
});

export const userSelector = (state: RootState) => state.users.users;
export const filtersSelector = (state: RootState) => state.users.filters;

export const { addUser, deleteUser, editUser,searchUser,resetUser } = userSlice.actions;

export default userSlice.reducer;
