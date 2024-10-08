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
import AdminLanding from "./pages/admin/AdminLanding";
import UserInfoPage from "./pages/admin/UserInfoPage";
import Withdraw from "./pages/Withdraw";
import Deposit from "./pages/Deposit";
import TopUp from "./pages/TopUp";
import ApproveDeposit from "./pages/admin/ApproveDeposit";
import PromoCodes from "./pages/admin/PromoCodes";
import Transactions from "./pages/Transactions";
import TopUpDeposit from "./pages/admin/TopUpDeposit";
import PaymentForm from "./pages/payment/PaymentForm";
import Success from "./pages/payment/Success";
import Failed from "./pages/payment/Failed";

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
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="/my-new-deposit" element={<Deposit />} />
        <Route path="/topUp" element={<TopUp />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/make-payment" element={<PaymentForm />} />
        <Route path="/payment-successful" element={<Success />} />
        <Route path="/payment-failed" element={<Failed />} />


        {/* Admin Section */}
        <Route path="/admin-landing" element={<AdminLanding />} />
        <Route path="/getParticularUser/:id" element={<UserInfoPage />} />
        <Route path="/editDeposit/:id" element={<ApproveDeposit />} />
        <Route path="/promoCodes" element={<PromoCodes />} />
        <Route path="/topupdeposit/:id" element={<TopUpDeposit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
