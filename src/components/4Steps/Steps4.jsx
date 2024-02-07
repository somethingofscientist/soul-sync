import React from 'react'
import { Slide } from 'react-reveal';

import styles from './Step4.module.css';
import phone from '../../Images/mobile1.png'
import google from '../../Images/google.png'
import star from '../../Images/StarFour.png'
import better from '../../Images/better.png'
import lower from '../../Images/lower.png'
import getting from '../../Images/get.png'
import meeting from '../../Images/meeting.png'
import matches from '../../Images/match.png'
import connected from '../../Images/connect.png'
import line from '../../Images/Line.png'

const Steps4 = () => {
  return (
    <>
      <div className={styles.container}>

        {/* HEADING SECTION */}
        <div className={styles.heading}>
          <div className={styles.left}>
            Your journey to meet your soulmate in 4 simple steps
          </div>
          <div className={styles.right}>
          </div>
          <Slide left cascade>
            <img
              style={{
                marginBottom: "50px",
                marginLeft: "10px"
              }}
              src={star}
              alt="" />
          </Slide>
        </div>
      </div>


      {/* STEPS SECTION */}
      <div className={styles.step_section}>
        <div className={styles.big_line}>
          <img src={line} alt="" />
        </div>


        <div className={styles.first_section}>
          <div className={styles.section_img}>
            <img
              src={getting}
              alt=""
            />
          </div>
          <div className={styles.sub_heading1}>
            Getting to know you
          </div>
          <div className={styles.sub_heading2}>
            Start your onboarding journey with a short 1 min form about you and your needs
          </div>
        </div>


        <div className={styles.first_section}>
          <div className={styles.section_img}>
            <img
              src={meeting}
              alt=""
            />
          </div>
          <div className={styles.sub_heading1}>
            Meet your SoulSyncer
          </div>
          <div className={styles.sub_heading2}>
            Discuss what you are looking for with your dedicated SoulSyncer
          </div>
        </div>


        <div className={styles.first_section} >
          <div className={styles.section_img}>
            <img
              src={matches}
              alt=""
            />
          </div>
          <div className={styles.sub_heading1}>
            See your Matches
          </div>
          <div className={styles.sub_heading2}>
            Evaluate profiles that you see based on your preferences & choose who you are interested in
          </div>
        </div>


        <div className={styles.first_section}>
          <div className={styles.section_img}>
            <img
              src={connected}
              alt=""
            />
          </div>

          <div className={styles.sub_heading1}>
            Get connected
          </div>
          <div className={styles.sub_heading2}>
            Get connected and receive conversation prompts for your match from your SoulSyncer
          </div>
        </div>



      </div>
    </>
  )
}

export default Steps4