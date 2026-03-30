import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { useUser } from "./context/UserContext";

const Layout = () => {
    const {isLoggedIn} = useUser();
    //const forTestingIsAuthenticated = true; // 

  return (
    <div className="min-h-screen flex flex-col bg-gray-200 pattern">
      <Navbar isAuthenticated={isLoggedIn}  />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;