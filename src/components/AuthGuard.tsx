import { Navigate } from "react-router-dom";
import { isLoggedIn } from "../utils/auth";
import type { AuthGuardProps } from "../interface/AuthGuard";

const AuthGuard = ({ children }: AuthGuardProps) => {
  if (isLoggedIn()) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default AuthGuard;