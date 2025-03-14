import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { useAppContext } from "../../context/AppContext";

const Layout = () => {
  const { black, mobileNav, setMobileNav } = useAppContext();

  return (
    <div className="w-full h-screen md:flex px-2">
      <Navbar />

      <div className="px-2 py-2 flex-1">
        <div className={`${black ? `bg-neutral-300 h-full` : ""} max-md:py-15`}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
