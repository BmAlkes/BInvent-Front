import { BrowserRouter, Routes, Route } from "react-router-dom";
import Forgot from "./Pages/auth/Forgot";
import Login from "./Pages/auth/Login";
import Reset from "./Pages/auth/Reset";
import Resgister from "./Pages/auth/Resgister";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resetpassword/:resetToken" element={<Reset />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/register" element={<Resgister />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
