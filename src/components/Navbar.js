import { useState } from 'react';

import TogglerButton from "./TogglerButton";
import NavbarMenu from "./NavbarMenu";

// import '../sass/main.css';

const Navbar = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return <nav className="navbar-expand-lg">
    <div className="container-lg nav__container">
      <div className="container">
        <div className="col-12">
          <TogglerButton onClick={handleShow}/>
          <NavbarMenu show={show} onHide={handleClose}/>
        </div>
      </div>
    </div>
  </nav>
};
export default Navbar;