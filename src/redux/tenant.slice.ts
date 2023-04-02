import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { cloneDeep, findIndex, omitBy } from 'lodash';
import type { Tenants } from '../models';
import type { RootState } from './store';
interface State {
	tenants: Tenants[];
	filters: Partial<Tenants>;
}

const initialState: State = {
	tenants: [],
	filters: {} as any,
};

const tenantSlice = createSlice({
	name: 'tenants',
	initialState,
	reducers: {
		addTenant: (state, { payload }: PayloadAction<Tenants>) => {
			const tenant: Tenants = {
				id: payload.id,
				tenant: payload.tenant,
			};
			state.tenants.push(tenant);
		},

		deleteTenant: (state, { payload }: PayloadAction<Pick<Tenants, 'id'>>) => {
			const tenants = cloneDeep(state.tenants);
			return { ...state, tenants: tenants.filter((tenant) => tenant.id != payload.id) };
		},
		editTenant: (state, { payload }: PayloadAction<Tenants>) => {
			const index = findIndex(state.tenants, { id: payload.id });
			if (index !== -1) {
				state.tenants[index] = payload;
			}
		},
		searchTenant: (state, { payload }: PayloadAction<Tenants>) => {
			state.filters = omitBy(payload, (val) => !val);
		},
		// searchTenant: (state, { payload }: PayloadAction<Pick<Tenants, 'tenant'>>) => {
		// 	console.log('redux', payload.tenant);
		// 	const tenants = cloneDeep(state.tenants);
		// 	return { ...state, tenants: tenants
		// 		.filter(tenant => tenant.tenant==(payload.tenant=='' ? tenant.tenant:payload.tenant)) 

		// 	 };
		// },
		resetTenant:()=>{
			return {...initialState}
		}
	},
});

export const tenantSelector = (state: RootState) => state.tenants.tenants;
export const filtersSelector = (state: RootState) => state.tenants.filters;

export const { addTenant, deleteTenant, editTenant,searchTenant,resetTenant } = tenantSlice.actions;

export default tenantSlice.reducer;
