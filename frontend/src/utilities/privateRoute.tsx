import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/utilities/hooks/useAuth";

function PrivateRoutes() {
  const isAuthenticated = useAuth();
  const location = useLocation();

  if (
    isAuthenticated &&
    (location.pathname === "/login" || location.pathname === "/signup")
  ) {
    // Redirect to a default page (e.g., home or dashboard) if already logged in
    return <Navigate to="/" replace />;
  }
  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

export default PrivateRoutes;
