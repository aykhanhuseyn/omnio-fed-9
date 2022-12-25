import loadable from '@loadable/component';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { loginSelector } from './redux/auth.slice';

const Login = loadable(() => import('./pages/Login').then());

function App() {
	const isLoggedIn = useSelector(loginSelector);

	if (!isLoggedIn) {
		return <Login />;
	}

	return (
		<Routes>
			<Route index element={<h1>salam</h1>} />
		</Routes>
	);
}

export default App;
