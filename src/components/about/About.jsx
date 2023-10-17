import React from 'react'
import Slide from 'react-reveal/Slide';

import styles from './About.module.css';
import heart_icon from '../../Images/heart_logo.png'
import dual_heart_icon from '../../Images/dual_heart_logo.png'
import ring_icon from '../../Images/ring_icon.png'

const About = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.heading}>
                    <div className={styles.left}>
                        About SoulSync
                    </div>
                    <div className={styles.right}>

                    </div>
                </div>


                {/* WEB CONTAINER */}
                <div className={styles.sub_container}>
                    <Slide right  >
                        <div className={styles.animation}>
                            <div className={styles.left_animation}>
                                <img src={heart_icon} alt="" />
                            </div>
                            <div className={styles.right_animation}>
                                SoulSync is out to disrupt the traditional arranged marriage matchmaking industry
                            </div>
                        </div>
                    </Slide>
                    <Slide left >
                        <div
                            className={styles.animation}
                            style={{ justifyContent: "end" }}
                        >
                            <div className={styles.left_animation}>
                                <img src={dual_heart_icon} alt="" />
                            </div>
                            <div
                                className={styles.right_animation}
                                style={{ textAlign: "justify", width: "70%" }}
                            >
                                We are a new age service provider that aims to effectively minimise your soulmate search with the highest quality
                            </div>
                        </div>
                    </Slide>
                    <Slide right  >
                        <div className={styles.animation}>
                            <div className={styles.left_animation}>
                                <img src={ring_icon} alt="" />
                            </div>
                            <div className={styles.right_animation}>
                                We tranform your search process by combining the power of data with the personalised approach of our experienced SoulSyncers
                            </div>
                        </div>
                    </Slide>
                </div>


                {/* MOBILE  */}
                <div className={styles.sub_container_mobile}>

                    <Slide left  >
                        <div className={styles.animation}>
                            <div className={styles.left_animation}>
                                <img src={heart_icon} alt="" />
                            </div>
                            <div className={styles.right_animation}>
                                SoulSync is out to disrupt the traditional arranged marriage matchmaking industry
                            </div>
                        </div>
                    </Slide>
                    <Slide right >
                        <div
                            className={styles.animation}
                            style={{ justifyContent: "end" }}
                        >
                            <div className={styles.left_animation}>
                                <div className={styles.right_mobile}>
                                    <img src={dual_heart_icon} alt="" />
                                </div>
                            </div>
                            <div
                                className={styles.right_animation}
                                style={{ textAlign: "justify", width: "70%" }}
                            >
                                We are a new age service provider that aims to effectively minimise your soulmate search with the highest quality
                            </div>
                        </div>
                    </Slide>
                    <Slide left  >
                        <div className={styles.animation}>
                            <div className={styles.left_animation}>
                                <img src={ring_icon} alt="" />
                            </div>
                            <div className={styles.right_animation}>
                                We tranform your search process by combining the power of data with the personalised approach of our experienced SoulSyncers
                            </div>
                        </div>
                    </Slide>

                </div>
            </div>
        </>
    )
}

export default About