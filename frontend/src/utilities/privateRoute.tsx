import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/utilities/hooks/useAuth";

function PrivateRoutes() {
  const isAuthenticated = useAuth();
  const location = useLocation();
  console.log("location",location)
  //  return isAuthenticated ? <Outlet />:  <Navigate to="/login" state={{ from: location }} replace /> // Pass location
  
 
    
  
   return isAuthenticated ? (
     <Outlet />
   ) : (
     <Navigate to="/login" state={{ from: location }} replace /> // Pass location
   );
}

export default PrivateRoutes;
