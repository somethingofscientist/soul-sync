import React from 'react'
import styles from './Footer.module.css';
import soulSync_logo from '../../Images/logo.png'
import facebook from '../../Images/facebook.png'

const Footer = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.orange_container}>
                    <div className={styles.start_journey}>Start your journey now !</div>
                    <div className={styles.start}>Start</div>
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
                            <img src={facebook} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer