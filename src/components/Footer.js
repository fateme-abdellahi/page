import facebook from '../icons/icon - facebook.svg';
import youtube from "../icons/icon - youtube.svg";
import be from "../icons/icon - be.svg";
import dribble from "../icons/icon - dribble.svg";
import whatsapp from "../icons/icon - whatsapp.svg";
import call from "../icons/icon - call.svg";
import email from "../icons/icon - email.svg"


const Footer = () => {
    return <footer>
        <div className="footer--bg">
            <h1>IN.DESIGN</h1>
            <p className='footer__description'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim labore
                necessitatibus beatae. Possimus fugit accusamus mollitia modi.
                Repellat, accusamus, consequuntur voluptate reprehenderit quod esse
                magni, quam harum impedit delectus dicta.
            </p>
            <div className="row footer__icons">
                <img
                    src={facebook}
                    className="footer__icon"
                    alt="facebook"
                />
                <img
                    src={youtube}
                    className="footer__icon"
                    alt="youtube"
                />
                <img src={be} className="footer__icon" alt="be" />
                <img
                    src={dribble}
                    className="footer__icon"
                    alt="dribbble"
                />
                <img
                    src={whatsapp}
                    className="footer__icon"
                    alt="whatsapp"
                />
            </div>
        </div>

        <div className="container">
            <div className="footer__menu">
                <span>Abaut</span>
                <span>Jobs</span>
                <span>Blog</span>
                <span>Press</span>
                <span>FAQ</span>
                <span>Careers</span>
                <span>Contact</span>
                <span>Privacy policy</span>
                <span>Sitemap</span>
                <span>Terms of Use</span>
            </div>

            <div className="row">
                <div className='footer__info'>
                    <div className='footer__cards'>
                        <div className="footer__card--info">
                            <img
                                src={call}
                                className="footer__icon justify-self-center"
                                alt="call"
                            />
                            <div className='footer__details'>
                                <p>Have a question?</p>
                                <h3>310 - 437 - 2766</h3>
                            </div>
                        </div>
                        <div className="footer__card--info">
                            <img
                                src={email}
                                className="footer__icon"
                                alt="email"
                            />
                            <div className='footer__details'>
                                <p>Contact us at</p>
                                <h3>abc123@gmail.com</h3>
                            </div>
                        </div>
                    </div>
                    <div className='copyright'>&copy; 2021,All rights reserved</div>
                </div>
            </div>
        </div>
    </footer>
}
export default Footer;