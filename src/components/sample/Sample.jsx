import React from 'react'
import styles from './Sample.module.css'


import phone from '../../Images/mobile1.png'
import google from '../../Images/google.png'
import star from '../../Images/StarFour.png'
import better from '../../Images/better.png'
import lower from '../../Images/lower.png'
import assess from '../../Images/assess.png';
import high from '../../Images/hgh.png'
import background_circle from '../../Images/background.png'
import Steps4 from '../4Steps/Steps4'


import Slide from 'react-reveal/Slide';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const Sample = () => {
    return (
        <div className={styles.container}>
            {/* HEADING SECTION */}
            <div className={styles.heading}>
                <div className={styles.left}>
                    Our service proposition
                </div>
                <div className={styles.right}>
                </div>
                <Slide left cascade>
                    <img
                        style={{
                            marginBottom: "50px",
                            marginLeft: "-30px"
                        }}
                        src={star}
                        alt="" />
                </Slide>
            </div>


            {/* SERVICE SECTION */}
            <div className={styles.main_container}>
                <div className={styles.middle_container}>
                    <div className={styles.circle1}>
                        <img src={better} alt="" />
                        <p> Better Match Rates</p>
                    </div>
                    <div className={styles.circle2}>
                        <img src={lower} alt="" />
                        <p>Lower search <br /> Costs</p>
                    </div>
                    <div className={styles.circle1}>
                        <img src={high} alt="" />
                        <p>Lower search <br /> Time</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sample