export interface LoginPageProps {
    onLoginSuccess: (token: string, userId: string, username: string) => void;
  }