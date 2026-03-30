import type { UserGeneralInfoProps } from "../UserGeneralInfo";

export interface UserContextProps {
  user: UserGeneralInfoProps | null;
  isLoggedIn: boolean;
  login: (user: UserGeneralInfoProps) => void;
  logout: () => void;
  updateUser: (newUserData: Partial<UserGeneralInfoProps>) => void;
  isAdmin: () => boolean;
  isLocalManager: () => boolean;
  isDefaultUser: () => boolean;
}