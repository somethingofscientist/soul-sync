import React from 'react'
import logo from '../../Images/header_logo.png';
import rope from '../../Images/rope.png';
import star from '../../Images/StarFour.png';
import sparkle from '../../Images/Sparkle.png';
import circle from '../../Images/circle.png';
import boy from '../../Images/boy.png';
import girl from '../../Images/girl.png';
import sign from '../../Images/sign.png';
import grp from '../../Images/grp1.jpg';
import styles from './Hero.module.css';

import Typewriter from 'typewriter-effect';

const Hero = () => {

  // CTA embed code is: <div data-paperform-id="soulsync" data-takeover="1"></div><script>(function() { var script = document.createElement('script'); script.src = "https://paperform.co/__embed.min.js";document.body.appendChild(script); })()</script> 



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
                <img src={sign} alt="" />
              </div>
              <div className={styles.sub_heading}>
                Say Hello to
                &nbsp;
                <Typewriter
                  options={{
                    strings: ['How', 'Why', 'What'],
                    autoStart: true,
                    loop: true,
                  }}
                />
                matters to you
              </div>
              <a href="https://thesoulsync.com/start/">
                <div className={styles.start_journey}>
                  Start Your Journey Now
                </div>
              </a>
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