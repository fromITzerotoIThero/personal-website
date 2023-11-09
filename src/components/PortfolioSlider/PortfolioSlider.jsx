import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './PortfolioSlider.module.css';
import { personalWebsiteMockup, anexWebsitePrintscreen, IBOSHomePageMockup, promaWebsitePrintscreen } from '../../assets/images/images';

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
                    <Link to="/portfolio/ibos">
                        <div className={styles.slide}>
                            <img src={IBOSHomePageMockup} alt="IBOS app on mobile screen" className={styles.image} />
                            <button className={styles.button_learn_more}>Learn more</button>
                        </div>
                    </Link>
                    <div className={styles.slide}>
                        <img src={anexWebsitePrintscreen} alt="Ducky duck" className={styles.image} />
                        <button className={styles.button_learn_more}>Learn more</button>
                    </div>
                    <div className={styles.slide}>
                        <img src={promaWebsitePrintscreen} alt="Ducky duck" className={styles.image} />
                        <button className={styles.button_learn_more}>Learn more</button>
                    </div>
                    <div className={styles.slide}>
                        <img src={personalWebsiteMockup} alt="Ducky duck" className={styles.image} />
                        <button className={styles.button_learn_more}>Learn more</button>
                    </div>
                </Slider>
            </section>
        );
    }
}

export default PortfolioSlider;