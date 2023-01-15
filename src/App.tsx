import loadable from "@loadable/component";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { loginSelector } from "./redux/auth.slice";
import "./styles/style.css";

const Login = loadable(() => import("./pages/Login"));
const Forgot = loadable(() => import("./pages/Login"));

const Dashboard = loadable(() => import("./pages/Dashboard"));
const Mbox = loadable(() => import("./pages/Mbox"));
const Settings = loadable(() => import("./pages/Settings"));
const Analytics = loadable(() => import("./pages/Analytics"));
const Channels = loadable(() => import("./pages/Channels"));
const Profile = loadable(() => import("./pages/Profile"));

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
        <Route path="/mbox" element={<Mbox />} />
        <Route path="/channels" element={<Channels />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
      
    </Layout>
  );
}

export default App;
