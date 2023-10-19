import React, { useState } from 'react'
import logo from '../../Images/header_logo.png';
import rope from '../../Images/rope.png';
import star from '../../Images/StarFour.png';
import sparkle from '../../Images/Sparkle.png';
import circle from '../../Images/circle.png';
import boy from '../../Images/boy.png';
import girl from '../../Images/girl.png';
import sign from '../../Images/sign.png';
import grp from '../../Images/grp1.jpg';
import tagline_line from '../../Images/svg/tagline_line.svg';
import styles from './Hero.module.css';

import Typewriter from 'typewriter-effect';

const Hero = () => {

  const [loading, setLoading] = useState(false);
  const [embedded, setEmbedded] = useState(false);

  const embedContent = () => {
    const script = document.createElement('script');
    script.src = 'https://paperform.co/__embed.min.js';
    script.async = true;

    const div = document.createElement('div');
    div.setAttribute('data-paperform-id', 'soulsync');
    div.setAttribute('data-takeover', '1');

    document.body.appendChild(div);
    document.body.appendChild(script);
    setEmbedded(true);
  };



  return (
    <>
      <div className={styles.container_web}>

        <div className={styles.left_web}>
          <div className={styles.rope}>
            <img src={rope} alt="" />
          </div>
          <div className={styles.girl}>
            <img src={girl} alt="" />
          </div>
        </div>


        <div className={styles.middle_web}>

          <div className={styles.sparkle}>
            <img src={sparkle} alt="" />
          </div>

          <div className={styles.circle_two}>
            <img src={circle} alt="" />
          </div>

          <div className={styles.logo}>
            <img src={logo} alt="" />
            <div className={styles.match_making}>
              <div className={styles.match_making1}>
                Matchmaking Redefined
              </div>
              <div className={styles.sign}>
                <img src={tagline_line} alt="" />
              </div>
              <div className={styles.sub_heading} >
                <span style={{ padding: " 0 5px" }} >Say Hello to </span>
                <Typewriter
                  options={{
                    strings: [' what matters to you', ' your curated matches', ' your future soulmate'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
              {loading ?
                (
                  <div className={styles.loading}>
                    <div className={styles.loading1}>

                    </div>
                  </div>
                ) :
                (
                  <button
                    onClick={embedContent}
                    className={styles.start_journey}>
                    Start Your Journey Now
                  </button>
                )
              }
            </div>
          </div>

          <div className={styles.circle}>
            <img src={circle} alt="" />
          </div>

          <div className={styles.grp_img}>
            <img src={grp} alt="" />
          </div>


        </div>


        <div className={styles.right_web}>
          <div className={styles.boy}>
            <img src={boy} alt="" />
          </div>
          <div className={styles.rope}>
            <img src={rope} alt="" />
          </div>
        </div>

      </div>
    </>
  )
}

export default Hero;