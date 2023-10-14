import React from 'react'

import styles from './Hero.module.css';
import logo from '../../Images/header_logo.png';
import rope from '../../Images/rope.png';
import star from '../../Images/StarFour.png';
import sparkle from '../../Images/Sparkle.png';
import circle from '../../Images/circle.png';
import man from '../../Images/boy.png';
import woman from '../../Images/girl.png';
import sign from '../../Images/sign.png';


const Hero = () => {
  return (
    <>
      <div className={styles.container}>

        <div className={styles.left}>

          <div className={styles.heading}>
            <div className={styles.sparkle}>
              <img src={sparkle} alt="" />
            </div>

            <div className={styles.logo}>
              <img src={logo} alt="" />

              <div className={styles.match_making}>
                <div className={styles.match_making1}>Matchmaking </div>
                <div className={styles.match_making2}>Redefined </div>
                {/* <img src={sign} alt="" /> */}

                <div className={styles.sub_heading}>
                  Say Hello to what matters to you
                </div>
                <div className={styles.start_journey}>
                  Start Your Journey Now
                </div>
              </div>
            </div>

            <div className={styles.circle}>
              <img src={circle} alt="" />
            </div>
          </div>



        </div>



        <div className={styles.right}>

          <div className={styles.star_img}>
            <img src={star} alt="" />
          </div>
          <div className={styles.woman_img}>
            <img src={woman} alt="" />
          </div>
          <div className={styles.circle_img}>
            <img src={circle} alt="" />
          </div>
          <div className={styles.man_img}>
            <img src={man} alt="" />
          </div>
          <div className={styles.rope_img}>
            <img src={rope} alt="" />
          </div>


        </div>

      </div>
    </>
  )
}

export default Hero