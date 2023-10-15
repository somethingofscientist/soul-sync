import React from 'react'
import Slide from 'react-reveal/Slide';

import styles from './Service.module.css';
import phone from '../../Images/mobile1.png'
import google from '../../Images/google.png'
import star from '../../Images/StarFour.png'
import better from '../../Images/better.png'
import lower from '../../Images/lower.png'
import assess from '../../Images/assess.png';
import high from '../../Images/hgh.png'

const Service = () => {
    return (
        <>
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
                <div className={styles.container1}>
                    <div className={styles.container1_left}>
                        <div className={styles.circle1}>
                            <img src={better} alt="" />
                            <p> Better Match Rates</p>
                        </div>
                        <div className={styles.circle2}>
                            <img src={lower} alt="" />
                            <p>Lower search time & cost</p>
                        </div>
                    </div>
                    <div className={styles.container1_right}>
                        <div className={styles.circle3}>
                            <img src={high} alt="" />
                            <p>High quality options</p>
                        </div>
                        <div className={styles.circle4}>
                            <img src={assess} alt="" />
                            <p>Assess matches better</p>
                        </div>
                    </div>
                </div>


                {/* PHONE SECTION */}
                <div className={styles.sub_container}>
                    <div className={styles.left}>
                        Sneak peak of what is in store for you
                        <img src={google} alt="" />
                    </div>
                    <Slide right cascade>
                        <div className={styles.right}>
                            <img src={phone} alt="" />
                        </div>
                    </Slide>
                </div>

            </div>
        </>
    )
}

export default Service