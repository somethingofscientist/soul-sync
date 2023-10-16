import React from 'react'


import styles from './Footer.module.css';
import soulSync_logo from '../../Images/logo.png'
import facebook from '../../Images/facebook.png'
import instagram from '../../Images/insta-logo.png'
import whatsapp from '../../Images/whatsapp.png'


const Footer = () => {
    const phoneNumber = '8920892992';
    const whatsappUrl = `https://wa.me/${phoneNumber}`;

    return (
        <>
            <div className={styles.container}>
                <div className={styles.orange_container}>
                    <div className={styles.start_journey}>Start your journey now !</div>
                    <a href="https://thesoulsync.com/start">
                        <div className={styles.start}>Start</div>
                    </a>
                </div>

                <div className={styles.footer}>
                    <div className={styles.left}>
                        <img src={soulSync_logo} alt="" />
                        <div className={styles.matchmaking}>
                            Matchmaking redefined
                        </div>
                    </div>
                    <div className={styles.right}>
                        <p>follow Us On</p>
                        <div className={styles.icon}>
                            <a href="https://www.facebook.com/">
                                <img src={facebook} alt="" />
                            </a>
                            <a href="https://www.instagram.com">
                                <img src={instagram} alt="" />
                            </a>
                            <a href={whatsappUrl}>
                                <img src={whatsapp} alt="WhatsApp" />
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer