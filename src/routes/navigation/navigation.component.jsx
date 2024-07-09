import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <Link className="logo-container" to="/">
        <div>Logo</div>
      </Link>
      <div className="nav-link-container">
        <Link className="nav-link" to="/shop">
          SHOP
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

export default Navigation;