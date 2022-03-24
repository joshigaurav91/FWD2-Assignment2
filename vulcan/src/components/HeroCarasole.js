import hero1 from '../images/header-slider-img-01.jpg';
import hero2 from '../images/header-slider-img-02.jpg';
import hero3 from '../images/header-slider-img-03.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HeroCarasole() {
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed:2000,
        speed: 10,
        slidesToShow: 1,
        slidesToScroll: 1
        
    };
    return (
        <Slider {...settings}>
            <div>
            <img src={hero1} alt='hero_img_1'/>
            </div>
            <div>
            <img src={hero2} alt='hero_img_2'/>
            </div>
            <div>
            <img src={hero3} alt='hero_img_3'/>
            </div>
        </Slider>
    );
}

export default HeroCarasole;