import React, { Component } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './PortfolioSlider.module.css';
import { personalWebsiteMockup, anexWebsitePrintscreen, gosiaPanekWebsitePrintscreen, promaWebsitePrintscreen } from '../../assets/images/images';

class PortfolioSlider extends Component {

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
        };

        return (
            <section className={styles.container}>
                <Slider {...settings} className={styles.slider}>
                    <div className={styles.slide}>
                        <img src={anexWebsitePrintscreen} alt="Ducky duck" className={styles.image} />
                    </div>
                    <div className={styles.slide}>
                        <img src={gosiaPanekWebsitePrintscreen} alt="Ducky duck" className={styles.image} />
                    </div>
                    <div className={styles.slide}>
                        <img src={promaWebsitePrintscreen} alt="Ducky duck" className={styles.image} />
                    </div>
                    <div className={styles.slide}>
                        <img src={personalWebsiteMockup} alt="Ducky duck" className={styles.image} />
                    </div>
                </Slider>
            </section>
        );
    }
}

export default PortfolioSlider;