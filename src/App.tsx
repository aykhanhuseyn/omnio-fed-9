import loadable from '@loadable/component';
import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
//import ProfileLayout from "./components/ProfileLayout";
import ProfileSide from './components/ProfileSide/ProfileSide';
//import SecurityProfile from "./pages/Profile/SecurityProfile/SecurityProfile";
import { loginSelector } from './redux/auth.slice';
import './styles/style.css';

const Login = loadable(() => import('./pages/Login'));
const Forgot = loadable(() => import('./pages/Login'));

const Dashboard = loadable(() => import('./pages/Dashboard'));
const Mbox = loadable(() => import('./pages/Mbox'));

const Settings = loadable(() => import('./pages/Settings/Settings'));
const Users = loadable(() => import('./pages/Settings/Users/Users'));
const Roles = loadable(() => import('./pages/Settings/Roles/Roles'));

const Analytics = loadable(() => import('./pages/Analytics'));
const Channels = loadable(() => import('./pages/Channels'));
const SecurityProfile = loadable(
	() => import('./pages/Profile/SecurityProfile'),
);
const ProfileLayout = loadable(() => import('./components/ProfileLayout'));
const GeneralProfile = loadable(() => import('./pages/Profile/GeneralProfile'));

function App() {
	const isLoggedIn = useSelector(loginSelector);

	if (!isLoggedIn) {
		return (
			<Routes>
				<Route path='login' element={<Login />} />
				<Route path='forgot' element={<Forgot />} />
				<Route path='*' element={<Navigate to='login' replace />} />
			</Routes>
		);
	}

	return (
		<Layout>
			<Routes>
				<Route index element={<Dashboard />} />
				<Route path='mbox' element={<Mbox />} />
				<Route path='channels' element={<Channels />} />
				<Route path='customers' element={<Channels />} />
				<Route path='analytics' element={<Analytics />} />
				<Route path='settings' element={<Settings />}>
					<Route path='users' element={<Users />} />
					<Route path='roles' element={<Roles />} />
					<Route path='tenants' element={<h2>Tenants</h2>} />
				</Route>
				<Route path='profile' element={<ProfileLayout />}>
					<Route path='security' element={<SecurityProfile />} />
					<Route path='general' element={<GeneralProfile />} />
				</Route>
				<Route path='*' element={<Navigate to='/' replace />} />
			</Routes>
		</Layout>
	);
}

export default App;
