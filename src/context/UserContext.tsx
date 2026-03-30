import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  use,
} from "react";
import type { ReactNode } from "react";
import type { UserGeneralInfoProps } from "../interface/UserGeneralInfo";
import type { UserContextProps } from "../interface/context/UserContext";
import { deleteCookie, getCookie } from "../utils/cookies";
import { jwtDecode } from "jwt-decode";
import { RolService, UserService } from "../service";
import {
  ADMIN_DEFALT_ID,
  LOCAL_MANAGER_ID,
  ROL_DEFAULT_ID,
} from "../config/api";

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserGeneralInfoProps | null>(null);
  const [cookie] = useState(getCookie("authToken"));
  const [userRol, setUserRol] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = getCookie("authToken");

      if (token) {
        const decodedToken: any = jwtDecode(token);

        const userData = await UserService.findByEmail(decodedToken.sub);
        setUser(userData);
        getUserRol();
      }
    };

    fetchData();
  }, [cookie]);

  useEffect(() => {
    getUserRol();
  }, [user]);

  const login = (newUser: UserGeneralInfoProps) => {
    setUser(newUser);
  };

  const logout = () => {
    setUser(null);
    deleteCookie("authToken");
  };

  const updateUser = useCallback(
    (newUserData: Partial<UserGeneralInfoProps>) => {
      console.log(newUserData);

      setUser((prevUser) => {
        if (!prevUser) return null; // No hay usuario previo para actualizar
        const updated = { ...prevUser, ...newUserData };
        return updated;
      });
    },
    []
  );

  const getUserRol = async () => {
    if (user) {
      //const rol = await RolService.getById(user.rolId);

      if (user.rolId === ROL_DEFAULT_ID) {
        setUserRol("USER");
      } else if (user.rolId === ADMIN_DEFALT_ID) {
        setUserRol("ADMIN");
      } else if (user.rolId === LOCAL_MANAGER_ID) {
        setUserRol("LOCAL_MANAGER");
      }
    }
  };

  const isAdmin = () => {
    return userRol === "ADMIN";
  };
  const isLocalManager = () => {
    return userRol === "LOCAL_MANAGER";
  };
  const isDefaultUser = () => {
    return userRol === "USER";
  };

  return (
    <UserContext.Provider
      value={{
        user,
        isLoggedIn: !!user,
        login,
        logout,
        updateUser,
        isLocalManager,
        isAdmin,
        isDefaultUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser debe usarse dentro de un UserProvider");
  }
  return context;
};
