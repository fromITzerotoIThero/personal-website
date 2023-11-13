import React, { Component } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './IBOSSlider.module.css';
import { IBOSDomainDetailsMockup, IBOSProductPageMockup, IBOSProductListMockup, IBOSWelcomeScreenMockup, IBOSDomainDetailsMockupResized, IBOSProductPageBackground } from '../../../assets/images/ibos/ibos-images';

class IBOSSlider extends Component {

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
                        <img src={IBOSProductPageBackground} alt="IBOS app on mobile screen" className={styles.image} />
                    </div>
                    <div className={styles.slide}>
                        <img src={IBOSProductPageMockup} alt="Ducky duck" className={styles.image} />
                    </div>
                    <div className={styles.slide}>
                        <img src={IBOSProductListMockup} alt="Ducky duck" className={styles.image} />
                    </div>
                    <div className={styles.slide}>
                        <img src={IBOSWelcomeScreenMockup} alt="Ducky duck" className={styles.image} />
                    </div>
                </Slider>
            </section>
        );
    }
}

export default IBOSSlider;