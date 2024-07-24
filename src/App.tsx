import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/homeSections/Homepage";
import AboutPage from "./pages/About";
import Faqs from "./pages/Faqs";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import InvestmentPlans from "./pages/InvestmentPlans";
import Register from "./pages/authentication/Register";
import Login from "./pages/authentication/Login";
import Profile from "./pages/authentication/Profile";
import UpdateProfile from "./pages/authentication/UpdateProfile";
import ChangePassword from "./pages/authentication/ChangePassword";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/authentication/ForgotPassword";
import ResetPassword from "./pages/authentication/ResetPassword";



export const ScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
};



function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/investment-plans" element={<InvestmentPlans />} />
        <Route path="/resetpassword" element={<ResetPassword />} />

        {/* Authentication */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Authenticated User */}
        <Route path="/my-profile" element={<Profile />} />
        <Route path="/updateuser" element={<UpdateProfile />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
