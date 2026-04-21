import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Home/Components/NavBar";
import Footer from "../Pages/Home/Components/Footer";

const Main = () => {
  return (
    <div className="bg-gray-100">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
