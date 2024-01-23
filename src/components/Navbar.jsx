import navList from '../utils/navList';
import cart from '../assets/icon-cart.svg';
import avatar from '../assets/image-avatar.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__links">
        <h1>sneakers</h1>
        <ul className="navbar__links">
          {navList.map((navList, i) => (
            <li key={i} className="home-link">
              <p>{navList}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar__icons">
        <img src={cart} alt="icon cart" className="icon" />
        <img src={avatar} alt="iavatar" className="icon" />
      </div>
    </nav>
  );
}

export default Navbar;
