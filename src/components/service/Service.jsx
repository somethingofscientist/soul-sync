import React from 'react'
import Slide from 'react-reveal/Slide';

import styles from './Service.module.css';
import phone from '../../Images/mobile1.png'
import google from '../../Images/google.png'
import star from '../../Images/StarFour.png'
import better from '../../Images/better.png'
import lower from '../../Images/lower.png'

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
                <div className={styles.service_container}>

                    <div className={styles.service_circle}>
                        <div className={styles.img_section}>
                            <img src={better} alt="" />
                        </div>
                        <div className={styles.txt_section}>
                            Better Match Rates
                        </div>
                    </div>

                    <div className={styles.service_circle2}>
                        <div className={styles.img_section}>
                            <img src={lower} alt="" />
                        </div>
                        <div className={styles.txt_section}>
                            Better Match Rates
                        </div>
                    </div>

                    <div className={styles.service_circle}>
                        <div className={styles.img_section}>
                            <img src={better} alt="" />
                        </div>
                        <div className={styles.txt_section}>
                            Better Match Rates
                        </div>
                    </div>

                    <div className={styles.service_circle2}>
                        <div className={styles.img_section}>
                            <img src={lower} alt="" />
                        </div>
                        <div className={styles.txt_section}>
                            Better Match Rates
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