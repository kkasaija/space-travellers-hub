import { Link } from 'react-router-dom';
// eslint-disable-next-line
import styles from './Header.modules.css'

const Header = () => (
  <nav className="nav flex aliCnt jstSpb">
    <div className="navItems">
      <div className="logoDiv">
        <img src="./images/3212567.png" width="40" alt="logo" />
        <h3 className="header">Space Travelers&lsquo; Hub</h3>
      </div>
      <div className="navlist">
        <Link className="link link1" to="/">Rockets</Link>
        <Link className="link link2" to="/missions">Missions</Link>
        <Link className="link link3" to="/myprofile">My Profile</Link>
      </div>
    </div>
  </nav>
);

export default Header;
