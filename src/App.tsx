import { UserProvider } from "./context/UserContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ChangePasswordPage from "./pages/ChangePasswordPage";
import CommentPage from "./pages/CommentPage";
import HomePage from "./pages/HomePage";
import LocalPage from "./pages/LocalPage";
import ProfilePage from "./pages/ProfilePage";
import AuthGuard from "./components/AuthGuard";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route
              path="/login"
              element={
                <AuthGuard>
                  <LoginPage />
                </AuthGuard>
              }
            />
            <Route
              path="/signup"
              element={
                <AuthGuard>
                  <SignUpPage />
                </AuthGuard>
              }
            />
            <Route
              path="/change-password"
              element={
                <AuthGuard>
                  <ChangePasswordPage />
                </AuthGuard>
              }
            />
            <Route path="/local/:id" element={<LocalPage />} />
            <Route path="/local/:id/comments" element={<CommentPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
