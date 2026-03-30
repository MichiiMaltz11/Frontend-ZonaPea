import {jwtDecode} from "jwt-decode";
import { getCookie } from "./cookies";

export const isLoggedIn = (): boolean => {
  const token = getCookie("authToken");
  if (!token) return false;

  try {
    const decoded: any = jwtDecode(token);
    const now = Date.now() / 1000;
    return decoded.exp > now;
  } catch (err) {
    return false;
  }
};
