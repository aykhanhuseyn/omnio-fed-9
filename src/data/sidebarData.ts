import HomeIcon from '@mui/icons-material/Home';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import GroupsIcon from '@mui/icons-material/Groups';
import AppsIcon from '@mui/icons-material/Apps';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';

import type { SvgIconTypeMap } from '@mui/material';
import type { OverridableComponent } from '@mui/material/OverridableComponent';

type SideBar = {
	key: string;
	title: string;
	link: string;
	icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & { muiName: string };
};

export const sidebarData: SideBar[] = [
	{
		key: 'dashboard',
		title: 'Dashboard',
		link: '/',
		icon: HomeIcon,
	},
	{
		key: 'mbox',
		title: 'Mbox',
		link: '/mbox',
		icon: QuestionAnswerIcon,
	},
	{
		key: 'customers',
		title: 'Customers',
		link: '/customers',
		icon: GroupsIcon,
	},
	{
		key: 'channels',
		title: 'Channels',
		link: '/channels',
		icon: AppsIcon,
	},
	{
		key: 'analytics',
		title: 'Analytics',
		link: '/analytics',
		icon: StackedLineChartIcon,
	},
	{
		key: 'settings',
		title: 'Settings',
		link: '/settings',
		icon: SettingsRoundedIcon,
	},
	{
		key: 'help',
		title: 'Help',
		link: '/help',
		icon: HelpCenterIcon,
	},
];
