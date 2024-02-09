import React, { useState } from 'react'


import styles from './Footer.module.css';
// import soulSync_logo from '../../Images/logo.png'
import soulSync_logo from '../../Images/svg/logo_maain.svg'
import facebook from '../../Images/facebook.png'
import instagram from '../../Images/insta-logo.png'
import whatsapp from '../../Images/whatsapp.png'
import tagline_line from '../../Images/svg/tagline_line.svg'
import { Link } from 'react-router-dom';


const Footer = () => {
    const phoneNumber = '+917876149249';

    const whatsappUrl = `https://wa.me/${phoneNumber}`;

    const [embedded, setEmbedded] = useState(false);

    // const embedContentInNewWindow = () => {
    //     const script = document.createElement('script');
    //     script.src = 'https://paperform.co/__embed.min.js';
    //     script.async = true;
    //     const newWindow = window.open('https://soulsync.paperform.co/?embed=1&takeover=1&inline=0&popup=0&_d=&_in=0', '_blank');
    //     if (newWindow) {
    //         const div = document.createElement('div');
    //         div.setAttribute('data-paperform-id', 'soulsync');
    //         div.setAttribute('data-takeover', '1');
    //         newWindow.document.body.appendChild(div);
    //         newWindow.document.body.appendChild(script);
    //         setEmbedded(true);
    //     } else {
    //         alert('Popup blocked or unable to open a new window.');
    //     }
    // };
    const embedContentInNewWindow = () => {
        const newWindow = window.open('', '_blank');
        if (newWindow) {
            const div = document.createElement('div');
            div.setAttribute('data-paperform-id', 'iqfglcub');
            div.setAttribute('data-takeover', '1');
            newWindow.document.body.appendChild(div);

            const script = newWindow.document.createElement('script');
            script.src = 'https://paperform.co/__embed.min.js';
            newWindow.document.body.appendChild(script);
            setEmbedded(true);
        } else {
            alert('Popup blocked or unable to open a new window.');
        }
    };



    return (
        <>
            <div className={styles.container}>

                <a href="https://soul-sync-app.applore.in/" target='_blank'>
                    <div className={styles.orange_container}>
                        <button
                        // onClick={embedContentInNewWindow}
                        >
                            {/* <div className={styles.start_journey}>
                            Login
                        </div> */}

                            <div className={styles.start_journey}>
                                Login
                            </div>
                        </button>
                    </div>
                </a>

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
                            <a href="https://www.facebook.com/people/SoulSync/61550716416243/?mibextid=ZbWKwL" target='_blank'>
                                <img src={facebook} alt="" />
                            </a>
                            <a href="https://www.instagram.com/__soulsync__/?igsh=MWF6ajdiZzhoeTJ3Yw%3D%3D" target='_blank'>
                                <img src={instagram} alt="" />
                            </a>
                            {/* <a href={whatsappUrl}>
                                <img src={whatsapp} alt="WhatsApp" />
                            </a> */}
                        </div>
                    </div>
                </div>
                <div className={styles.foooter_last}>
                    <Link to='/privacy-policy' >
                        Privacy Policy
                    </Link>

                    <Link to='/terms-and-condition' >
                        Terms & Condition
                    </Link>

                    <Link to='/refund-and-cancellation' >
                        Refund & cancellation policy
                    </Link>

                    <Link to='/contact-us'>
                        Contact Us
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Footer