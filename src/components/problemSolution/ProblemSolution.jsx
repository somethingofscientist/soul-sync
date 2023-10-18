import React from 'react'

import styles from './Problem.module.css';
import understanding from '../../Images/understand.png'
import random from '../../Images/random.png'
import dull from '../../Images/dull.png'
import poor_service from '../../Images/poor.png'
import lack from '../../Images/poor_service.png'
import setting from '../../Images/setting.png'
import data from '../../Images/data.png'
import seamless from '../../Images/seamless.png'
import service_level from '../../Images/service_level.png'

const ProblemSolution = () => {
  return (
    <>
      <div className={styles.container}>

        {/* PROBLEM */}
        <div className={styles.problem}>

          {/* HEADING */}
          <div className={styles.heading}>
            <div className={styles.left}>
              Current Problems
            </div>
            <div className={styles.right}></div>
          </div>

          {/* PROBLEM 1 */}
          <div className={styles.box}>
            <div className={styles.icon}>
              <img src={understanding} alt="" />
            </div>
            <div className={styles.orange_line}></div>
            <div className={styles.txt}>
              <div className={styles.subheading1}>
                Lack of understanding you and your needs
              </div>
              <div className={styles.subheading2}>
                ‘Matchmakers’ neither take the time to truly understand who you are nor go in depth to understand what your partner preferences are
              </div>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.icon}>
              <img src={random} alt="" />
            </div>
            <div className={styles.orange_line}></div>
            <div className={styles.txt}>
              <div className={styles.subheading1}>
                Random matchmaking
              </div>
              <div className={styles.subheading2}>
                Matchmaking process is currently done basis an individuals ‘perception’ of what a good match for you is resulting in low match rates
              </div>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.icon}>
              <img src={dull} alt="" />
            </div>
            <div className={styles.orange_line}></div>
            <div className={styles.txt}>
              <div className={styles.subheading1}>
                Dull Bio-data's
              </div>
              <div className={styles.subheading2}>
                Text heavy documents that doesn’t reflect critical information or personality of an individual results in limited information to decide interest levels
              </div>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.icon}>
              <img src={poor_service} alt="" />
            </div>
            <div className={styles.orange_line}></div>
            <div className={styles.txt}>
              <div className={styles.subheading1}>
                Poor service from traditional bureaus
              </div>
              <div className={styles.subheading2}>
                No feedback or structured review mechanisms are offered to improve match rates
              </div>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.icon}>
              <img src={lack} alt="" />
            </div>
            <div className={styles.orange_line}></div>
            <div className={styles.txt}>
              <div className={styles.subheading1}>
                Lack of relevant profiles
              </div>
              <div className={styles.subheading2}>
                Traditional bureaus have limited profiles leading to forced compromise of your preferences
              </div>
            </div>
          </div>

        </div>

        {/* SOLUTION */}
        <div className={styles.solution}>

          {/* HEADING */}
          <div className={styles.heading}>
            <div className={styles.right}></div>
            <div className={styles.left}>
              Our Solutions
            </div>
          </div>

          {/* SOLUTION 1 */}
          <div className={styles.box}>
            <div className={styles.txt}>
              <div className={styles.subheading1}>
                In-depth and holistic understanding of your preferences
              </div>
              <div className={styles.subheading2}>
                15 partner preference parameters are taken to ensure a holistic approach is adopted towards your partner search
              </div>
            </div>
            <div className={styles.orange_line}></div>
            <div className={styles.icon}>
              <img src={setting} alt="" />
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.txt}>
              <div className={styles.subheading1}>
                Curated connections powered by data
              </div>
              <div className={styles.subheading2}>
                Profile recommendations are completely data driven & curated basis your partner preference inputs. We prioritize profile recommendation basis potential  sync rates
              </div>
            </div>
            <div className={styles.orange_line}></div>
            <div className={styles.icon}>
              <img src={data} alt="" />
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.txt}>
              <div className={styles.subheading1}>
                Seamless online profiles with video snippets
              </div>
              <div className={styles.subheading2}>
                Get to know your potential matches better with our innovative, easy to consume individual profile pages with a video snippet.
              </div>
            </div>
            <div className={styles.orange_line}></div>
            <div className={styles.icon}>
              <img src={seamless} alt="" />
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.txt}>
              <div className={styles.subheading1}>
                Superior Service Levels
              </div>
              <div className={styles.subheading2}>
                Conversational guidance, continuous feedback, review sessions and much more
              </div>
            </div>
            <div className={styles.orange_line}></div>
            <div className={styles.icon}>
              <img src={service_level} alt="" />
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.txt}>
              <div className={styles.subheading1}>
                Numerous high quality and verified profiles
              </div>
              <div className={styles.subheading2}>
                Targeted clientele onboarded to ensure an exceptional network
              </div>
            </div>
            <div className={styles.orange_line}></div>
            <div className={styles.icon}>
              <img src={service_level} alt="" />
            </div>
          </div>


        </div>

      </div>
    </>
  )
}

export default ProblemSolution