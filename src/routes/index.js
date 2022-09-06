import {
  LoginPage,
  HomePage,
  DetailPage,
  CheckInPage,
  CheckOutPage,
  Page404,
} from "../pages";

import { Routes, Route, Navigate } from "react-router-dom";
// import AuthGuard from "../Guards/AuthGuard";

const Router = () => {
  return (
    <Routes>
      {/* Auth route */}
      <Route path="/auth/login" element={<LoginPage />} />,{/* App routes */}
      <Route path="/" element={<Navigate to="/books" />} />
      ,
      <Route path="/books" element={<HomePage />} />
      ,
      <Route path="/book/:id" element={<DetailPage />} />,
      <Route path="/book/:id/check-in" element={<CheckInPage />} />,
      <Route path="/book/:id/check-out" element={<CheckOutPage />} />,
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default Router;
