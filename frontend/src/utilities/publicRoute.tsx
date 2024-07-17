 
import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "@/utilities/hooks/useAuth";

function PublicRoutes() {
  const isAuthenticated = useAuth();
      return isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <Outlet />
      );
}

export default PublicRoutes;
