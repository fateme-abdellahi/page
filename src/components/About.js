import manImage from "../icons/man.png";
import womanImage from "../icons/woman.png";
import aboutImage from "../icons/6.svg";

const designers = [{
    name: 'Sara Nicolson',
    career: 'Designer',
    image: womanImage
},
{
    name: '??',
    career: '??',
    image: manImage
},
{
    name: '??',
    career: '??',
    image: womanImage
},
{
    name: '??',
    career: '??',
    image: manImage
},
{
    name: '??',
    career: '??',
    image: womanImage
},
{
    name: '??',
    career: '??',
    image: manImage
}
]


const About = () => {
    return <div class="container about">
        <section class="row" id="about">
            <div class="about-title">
                <div class="flex-display"><div class="hr-title-line"></div></div>
                <div class="page-title">A team United by shared values</div>
            </div>
            <div class="col-sm-12 col-lg-5 about__description">
                <div class="col-sm-12 col-lg-6 about__description--bg">
                    <div><img src={aboutImage} class="about__img" alt="about"/></div>
                    <p class="about__details">Professional designers in our team</p>
                </div>
            </div>

            <div class="col-sm-12 col-lg-7 about-pictures">
                {designers.map((designer,index)=><div key={index} class="col-6 col-lg-4 about-pictures__container">
                    <div class="about-pictures--hover">
                        <span class="about-pictures__name">{designer.name}</span>
                        <span class="about-pictures__career">{designer.career}</span>
                    </div>
                    <img src={designer.image} class="about-pictures__img" alt="designer"/>
                </div>
                )}
            </div>
        </section>
    </div>
}
export default About;