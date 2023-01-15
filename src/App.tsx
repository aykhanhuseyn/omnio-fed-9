import loadable from "@loadable/component";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Analytics } from "./pages/Analytics";
import { Channels } from "./pages/Channels";
import Dashboard from "./pages/Dashboard";
import { Mbox } from "./pages/Mbox";
import { Profile } from "./pages/Profile";
import { Settings } from "./pages/Settings";
import { loginSelector } from "./redux/auth.slice";
import "./styles/style.css";
const Login = loadable(() => import("./pages/Login").then());
function App() {
  const isLoggedIn = useSelector(loginSelector);

  if (!isLoggedIn) {
    return <Login />;
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
