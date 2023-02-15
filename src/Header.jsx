import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <>
      <div class="container d-flex align-items-center justify-content-center fs-2">
        <p>FELLOWSHIP BIBLE CHURCH</p>
      </div>
      <header>
        <div class="container d-flex align-items-center justify-content-center fs-6">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/beliefs">Beliefs</Link>
            <Link to="/missions">Missions</Link>
            <Link to="/contact">Contact</Link>
            <a href="https://live.fbcmn.org/">Sermons</a>
          </nav>
        </div>
      </header>

      <div class="container-xxl">
        <hr class="text-secondary mt-0" />
      </div>
      <Outlet />
    </>
  )
};

export default Header;