import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './PortfolioSlider.module.css';
import duck from '../../assets/images/thomas-despeyroux-rubber-duck-unsplash.jpg';


function PortfolioSlider() {
    const settings = {
        dots: true,
        speed: 500,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    centerMode: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            }
        ],
    };

    return (
        <div className={styles.container}>
            <Slider {...settings} className={styles.slider}>
                <div>
                    <img src={duck} alt="Ducky duck" className={styles.image} />
                </div>
                <div>
                    <img src={duck} alt="Ducky duck" />
                </div>
                <div>
                    <img src={duck} alt="Ducky duck" />
                </div>
            </Slider>
        </div>
    );
}

export default PortfolioSlider;