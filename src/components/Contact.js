import arrowIcon from "../icons/icon-arrow.svg";
const Contact = () => {
    return <div className="container-lg">
        <div className="container">
            <section className="row">
                <div className="contact">
                    <form className="contact__form">
                        <div>
                            <div className="contact-title">
                                <div className="flex-display">
                                    <div className="flex-display"><div className="hr-title-line contact-title__line"></div></div>
                                    <div className="page-title">Get a free consultation. Just leave a request below</div>
                                </div>
                            </div>
                            <div className="contact-input">
                                <input className="contact-input__input" placeholder="Your phone number" />
                                <button className="contact-input__button"><span>Callback</span><img src={arrowIcon} alt="arrow"/></button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    </div>
}
export default Contact;