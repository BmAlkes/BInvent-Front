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
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getLoginStatus } from "./services/authServices";
import { SET_LOGIN } from "./redux/features/auth/authSlice";
import AddProducts from "./Pages/addProducts/addProducts";
import Systeam from "./Pages/Systeam/Systeam";
import Contact from "./Pages/Contact/Contact";
import Profile from "./Pages/Profile/Profile";
import EditProduct from "./Pages/editProduct/EditProduct";
import ProductDetail from "./Components/product/productDetails/productDetails";
import EditProfile from "./Pages/Profile/EditProfile";

axios.defaults.withCredentials = true;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function loginStatus() {
      const status = await getLoginStatus();
      dispatch(SET_LOGIN(status));
    }
    loginStatus();
  }, [dispatch]);
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
        <Route
          path="/add-product"
          element={
            <SiderBar>
              <Layout>
                <AddProducts />
              </Layout>
            </SiderBar>
          }
        />
        <Route
          path="/product-detail/:id"
          element={
            <SiderBar>
              <Layout>
                <ProductDetail />
              </Layout>
            </SiderBar>
          }
        />
        <Route
          path="/edit-product/:id"
          element={
            <SiderBar>
              <Layout>
                <EditProduct />
              </Layout>
            </SiderBar>
          }
        />
        <Route
          path="/profile"
          element={
            <SiderBar>
              <Layout>
                <Profile />
              </Layout>
            </SiderBar>
          }
        />
        <Route
          path="/edit-profile"
          element={
            <SiderBar>
              <Layout>
                <EditProfile />
              </Layout>
            </SiderBar>
          }
        />
        <Route
          path="/contact-us"
          element={
            <SiderBar>
              <Layout>
                <Contact />
              </Layout>
            </SiderBar>
          }
        />
        <Route
          path="/systeam"
          element={
            <SiderBar>
              <Layout>
                <Systeam />
              </Layout>
            </SiderBar>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
