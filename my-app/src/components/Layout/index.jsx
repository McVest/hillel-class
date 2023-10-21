import {Header} from "../index";
import {Outlet} from "react-router-dom";

const Layout = () => {
  return (
    <div className="Layout">
      <Header/>
      <div className='content'>
        <Outlet/>
      </div>
    </div>
  );
};

export default Layout;