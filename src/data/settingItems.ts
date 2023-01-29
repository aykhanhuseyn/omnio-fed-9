type SettingItems = {
	key: string;
	title: string;
	link: string;
};

export const settingItems: SettingItems[] = [
	{
		key: 'users',
		title: 'Users',
		link: '/settings/users',
	},
	{
		key: 'roles',
		title: 'Roles',
		link: '/settings/roles',
	},
	{
		key: 'tenants',
		title: 'Tenants',
		link: '/settings/tenants',
	},
];
