
import togglerImg from '../icons/icon - menu.svg';

const TogglerButton = (props) => {
    return <button
    onClick={props.onClick}
        className="nav__toggler"
        data-bs-toggle="offcanvas"
        data-bs-target="#navbarTogglerBody"
        aria-controls="navbarTogglerBody"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <div className="nav__icon"><img src={togglerImg} alt='menu-icon'/></div>
    </button>
}
export default TogglerButton;