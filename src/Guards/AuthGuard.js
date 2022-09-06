import { useState } from "react";
import { useLocation } from "react-router-dom";
// hooks
import useAuth from "../Hooks/useAuth";
// pages
import { LoginPage } from "../pages";

// ----------------------------------------------------------------------

export default function AuthGuard({ children }) {
  const { isAuthenticated } = useAuth();

  const { pathname } = useLocation();
  const [requestedLocation, setRequestedLocation] = useState(null);

  if (!isAuthenticated) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname);
    }
    return <LoginPage />;
  }

  if (requestedLocation && pathname !== requestedLocation) {
    setRequestedLocation(null);
    return <LoginPage />;
  }

  return <>{children}</>;
}
