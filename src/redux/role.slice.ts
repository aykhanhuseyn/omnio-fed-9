import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { cloneDeep, filter, find, findIndex, uniqueId } from 'lodash';
import type { LoginUser, Roles } from '../models';
import type { RootState } from './store';
interface State {
	roles: Roles[];
	loading: boolean;
}

const initialState: State = {
	roles: [],
	loading: false,
};

const roleSlice = createSlice({
	name: 'roles',
	initialState,
	reducers: {
		addRole: (state, { payload }: PayloadAction<Roles>) => {
			const role: Roles = {
				id: payload.id,
				role: payload.role,
			};
			state.roles.push(role);
		},

		deleteRole: (state, { payload }: PayloadAction<Pick<Roles, 'id'>>) => {
			console.log('redux', payload.id);
			const roles = cloneDeep(state.roles);
			return { ...state, roles: roles.filter((role) => role.id != payload.id) };
		},
		editRole: (state, { payload }: PayloadAction<Roles>) => {
			const index = findIndex(state.roles, { id: payload.id });
			console.log('index', index, payload);
			if (index !== -1) {
				state.roles[index] = payload;
			}
		},
		searchRole: (state, { payload }: PayloadAction<Pick<Roles, 'role'>>) => {
			console.log('redux', payload.role);
			const roles = cloneDeep(state.roles);
			return { ...state, roles: roles
				.filter(role => role.role==(payload.role=='' ? role.role:payload.role)) 

			 };
			
		},
		resetRole:()=>{
			return {...initialState}
		}


	},
});

export const roleSelector = (state: RootState) => state.roles.roles;

export const { addRole, deleteRole, editRole,searchRole,resetRole } = roleSlice.actions;

export default roleSlice.reducer;
