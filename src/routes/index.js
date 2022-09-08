import {
  LoginPage,
  HomePage,
  DetailPage,
  CheckInPage,
  CheckOutPage,
  Page404,
  SignupPage,
} from "../pages";

import { Routes, Route, Navigate } from "react-router-dom";
import AuthGuard from "../Guards/AuthGuard";

const Router = () => {
  return (
    <Routes>
      {/* Auth route */}
      <Route path="/auth/login" element={<LoginPage />} />,{/* App routes */}
      <Route path="/auth/register" element={<SignupPage />} />,{/* App routes */}
      <Route path="/" element={<Navigate to="/books" />} />
      ,
      <Route
        path="/books"
        element={
          <AuthGuard>
            <HomePage />
          </AuthGuard>
        }
      />
      ,
      <Route
        path="/book/:bookId"
        element={
          <AuthGuard>
            <DetailPage />
          </AuthGuard>
        }
      />
      ,
      <Route
        path="/book/:id/check-in"
        element={
          <AuthGuard>
            <CheckInPage />
          </AuthGuard>
        }
      />
      ,
      <Route
        path="/book/:id/check-out"
        element={
          <AuthGuard>
            <CheckOutPage />
          </AuthGuard>
        }
      />
      ,
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default Router;
