import {Link} from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <ul>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/user'}>Users</Link></li>
      </ul>
    </div>
  );
};
export default Header;
