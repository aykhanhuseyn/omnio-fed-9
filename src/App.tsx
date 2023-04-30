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

const Dashboard = loadable(() => import('./pages/Dashboard/Dashboard'));

const Mbox = loadable(() => import('./pages/Mbox'));
const Queue = loadable(() => import('./pages/Mbox/Queue'));


const Settings = loadable(() => import('./pages/Settings'));
const Users = loadable(() => import('./components/Users'));
const Roles = loadable(() => import('./components/Roles'));
const Tenants = loadable(() => import('./components/Tenants'));

const Analytics = loadable(() => import('./pages/Analytics'));

const Channels = loadable(() => import('./pages/Channels/Channels'));
const FacebookPage=loadable(()=>import('./pages/Channels/FacebookPage'))
const EmailPage=loadable(()=>import('./pages/Channels/EmailPage'))
const WhatsAppPage=loadable(()=>import('./pages/Channels/WhatsAppPage'))

const Help=loadable(()=>import('./pages/Help'))

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
        <Route path="facebook" element={<FacebookPage/>} />
        <Route path="email" element={<EmailPage/>} />
        <Route path="whatsapp" element={<WhatsAppPage />} />


				<Route path='customers' element={<Channels />} />
				<Route path='analytics' element={<Analytics />} />
				<Route path='settings' element={<Settings />}>
					<Route path='users' element={<Users />} />
					<Route path='roles' element={<Roles />} />
					<Route path='tenants' element={<Tenants/>} />
				</Route>
				<Route path='profile' element={<ProfileLayout />}>
					<Route path='security' element={<SecurityProfile />} />
					<Route path='general' element={<GeneralProfile />} />
				</Route>
				<Route path='help' element={<Help/>}/>
				<Route path='*' element={<Navigate to='/' replace />} />
			</Routes>
		</Layout>
	);
}

export default App;
