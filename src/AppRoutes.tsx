import { Routes, Route, useNavigate } from "react-router-dom";
import ProtectedRoutes from "./components/ProtectedRoutes";
import ForgotPassword from "./pages/ForgotPassword";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ResetPassword from "./pages/ResetPassword";
import Signup from "./pages/Signup";
import useAuth from "./store/useAuth";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const AppRoutes = () => {
  const { user } = useAuth((state) => state);
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const continueUrl = searchParams.get("continueUrl");

  useEffect(() => {
    if (continueUrl) {
      const path = continueUrl.replace(
        "https://react-firebaze-auth.netlify.app/",
        ""
      );
      navigate(path);
    }
  }, [continueUrl]);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route path="reset-password" element={<ResetPassword />} />

      <Route element={<ProtectedRoutes isAllowed={user} />}>
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
