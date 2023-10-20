import React, { useState } from 'react'


import styles from './Footer.module.css';
// import soulSync_logo from '../../Images/logo.png'
import soulSync_logo from '../../Images/svg/logo_maain.svg'
import facebook from '../../Images/facebook.png'
import instagram from '../../Images/insta-logo.png'
import whatsapp from '../../Images/whatsapp.png'
import tagline_line from '../../Images/svg/tagline_line.svg'


const Footer = () => {
    const phoneNumber = '7678149249';
    const whatsappUrl = `https://wa.me/${phoneNumber}`;

    const [embedded, setEmbedded] = useState(false);

    const embedContentInNewWindow = () => {
        const script = document.createElement('script');
        script.src = 'https://paperform.co/__embed.min.js';
        script.async = true;
        const newWindow = window.open('https://soulsync.paperform.co/?embed=1&takeover=1&inline=0&popup=0&_d=&_in=0', '_blank');
        if (newWindow) {
            const div = document.createElement('div');
            div.setAttribute('data-paperform-id', 'soulsync');
            div.setAttribute('data-takeover', '1');
            newWindow.document.body.appendChild(div);
            newWindow.document.body.appendChild(script);
            setEmbedded(true);
        } else {
            alert('Popup blocked or unable to open a new window.');
        }
    };



    return (
        <>
            <div className={styles.container}>

                <div className={styles.orange_container}>
                    <button
                        onClick={embedContentInNewWindow}
                    >
                        <div className={styles.start_journey}>Start your journey now !</div>
                    </button>
                </div>

                <div className={styles.footer}>
                    <div className={styles.left}>
                        <img src={soulSync_logo} alt="" />
                        <div className={styles.match_making1}>
                            Matchmaking Redefined
                        </div>
                        <div className={styles.sign}>
                            <img src={tagline_line} alt="" />
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