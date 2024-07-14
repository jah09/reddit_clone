import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from '@/utilities/hooks/useAuth';

function PrivateRoutes() {
    const isAuthenticated = useAuth();
    return isAuthenticated ? (
      <Outlet />
     
  ) : (
            // Redirect or show an alternative message
            <Navigate to='/login' replace  />
  );
   // return isAuthenticated ? < Outlet /> : <Navigate to='/login' />
}

export default PrivateRoutes
