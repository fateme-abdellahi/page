import introductionImage from "../icons/image-introduction.svg";
import arrowIcon from "../icons/icon-arrow.svg";

const Introduction = () => {
    return <div class="container-lg">
        <div class="container">
            <section class="row introduction" id="section1">
                <div class="introduction__details col-lg-6 col-sm-12">
                    <div class="introduction__title">
                        We Make Your H<span class="introduction__span">o</span>me Better
                        Today
                    </div>
                    <div class="introduction__description">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur.
                    </div>
                    <button class="introduction__button">
                        <span class="introduction__button-text">TO ORDER</span>
                        <img src={arrowIcon} class="introduction__button-icon" alt="arrow"/>
                    </button>
                </div>
                <div class="col-12 col-md-6 introduction__background"></div>
                <div class="col-lg-5 introduction__img">
                    <img src={introductionImage} alt="introduction"/>
                </div> 
            </section>
        </div>
    </div>
};

export default Introduction;