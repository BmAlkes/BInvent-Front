import { BrowserRouter, Routes, Route } from "react-router-dom";
import SiderBar from "./Components/sidebar/SiderBar";
import Forgot from "./Pages/auth/Forgot";
import Login from "./Pages/auth/Login";
import Reset from "./Pages/auth/Reset";
import Resgister from "./Pages/auth/Resgister";
import Home from "./Pages/Home";
import Layout from "./Components/layout/layout";
import Dashboard from "./Pages/DashBoard/Dashboard";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

axios.defaults.withCredentials = true;

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resetpassword/:resetToken" element={<Reset />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/register" element={<Resgister />} />

        <Route
          path="/dashboard"
          element={
            <SiderBar>
              <Layout>
                <Dashboard />
              </Layout>
            </SiderBar>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
