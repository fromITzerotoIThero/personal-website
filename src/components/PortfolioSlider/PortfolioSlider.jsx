import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './PortfolioSlider.module.css';
import { anexWebsitePrintscreen, gosiaPanekWebsitePrintscreen, promaWebsitePrintscreen } from '../../assets/images/images';

class PortfolioSlider extends Component {

    render() {

        const breakpoint = {
            small: 400,
            medium: 768, 
            large: 1024,
        }

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: breakpoint.large,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: true,
                    }
                },
                // {
                //     breakpoint: breakpoint.medium,
                //     settings: {
                //         slidesToShow: 1,
                //     }
                // },
            ],
        };

        return (
            <div className={styles.container}>
                <Slider {...settings} className={styles.slider}>
                    <div className={styles.image_container}>
                        <img src={anexWebsitePrintscreen} alt="Ducky duck" className={styles.image} />
                    </div>
                    <div className={styles.image_container}>
                        <img src={gosiaPanekWebsitePrintscreen} alt="Ducky duck" className={styles.image} />
                    </div>
                    <div className={styles.image_container}>
                        <img src={promaWebsitePrintscreen} alt="Ducky duck" className={styles.image} />
                    </div>
                </Slider>
            </div >
        );
    }
}

export default PortfolioSlider;