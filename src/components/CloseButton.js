import closeButton from '../icons/icon -  close.svg';
const CloseButton=(props)=>{
    return <button
    onClick={props.onClick}
    class="menu__close-button"
    data-bs-dismiss="offcanvas"
  >
    <img src={closeButton} alt="close button"/>
  </button>
}
export default CloseButton;