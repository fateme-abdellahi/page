import CloseButton from "./CloseButton";
import Offcanvas from 'react-bootstrap/Offcanvas';

import Button from "./Button";

// import '../sass/main.css';
const NavbarMenu = (props) => {
  return <Offcanvas show={props.show} onHide={props.onHide} responsive="lg" className="menu" id="navbarTogglerBody">
  <ul className="nav__list">
    <div className="nav__header">
      <span className="nav__brand">IN.DESIGN</span>
      <CloseButton onClick={props.onHide}/>
    </div>
    <div className="nav__links">
      <li>
        <a href="/" className="nav__link nav__link--active" aria-current="page">Home</a>
      </li>
      <li>
        <a href="/" className="nav__link">Abaut Us</a>
      </li>
      <li>
        <a href="/" className="nav__link">Services</a>
      </li>
      <li>
        <a href="/" className="nav__link">Portfolio</a>
      </li>
      <li>
        <a href="/" className="nav__link">Contacts</a>
      </li>
    </div>
    <Button className="nav__button">Register/Login</Button>
  </ul>
</Offcanvas>
}
export default NavbarMenu;