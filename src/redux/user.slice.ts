import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { cloneDeep, filter, find, findIndex, uniqueId } from 'lodash';
import type { LoginUser, Users } from '../models';
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

		deleteUser: (state, { payload }: PayloadAction<Pick<Users, 'id'>>) => {
			console.log('redux', payload.id);
			const users = cloneDeep(state.users);
			return { ...state, users: users.filter((user) => user.id != payload.id) };
		},
		editUser: (state, { payload }: PayloadAction<Users>) => {
			const index = findIndex(state.users, { id: payload.id });
			console.log('index', index, payload);
			if (index !== -1) {
				state.users[index] = payload;
			}
		},
		searchUser: (state, { payload }: PayloadAction<Users>) => {
			const users = cloneDeep(state.users);
			return { ...state, users: users
				.filter(user => user.name==(payload.name=='' ? user.name:payload.name)) 
				.filter(user => user.username==(payload.username=='' ? user.username:payload.username)) 
				.filter(user => user.email==(payload.email=='' ? user.email:payload.email)) 
				.filter(user => user.surname==(payload.surname=='' ? user.surname:payload.surname)) 
				.filter(user => user.role==(payload.role=='' ? user.role:payload.role)) 
				.filter(user => user.tenant==(payload.tenant=='' ? user.tenant:payload.tenant)) 

			};
			// return { ...state, users: users.filter((user) => user==payload) };
		},
		resetUser:()=>{
			return {...initialState}
		}
	},
});

export const userSelector = (state: RootState) => state.users.users;

export const { addUser, deleteUser, editUser,searchUser,resetUser } = userSlice.actions;

export default userSlice.reducer;
