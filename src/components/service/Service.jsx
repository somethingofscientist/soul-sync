import styles from './Service.module.css';
import phone from '../../Images/svg/phione.svg'
import phone2 from '../../Images/svg/phone2.svg'
// import google from '../../Images/google.png'
import play_store from '../../Images/play_store.png'
import app_store from '../../Images/app_store.png'
import star from '../../Images/StarFour.png'
import better from '../../Images/better.png'
import lower from '../../Images/lower.png'
import assess from '../../Images/assess.png';
import high from '../../Images/hgh.png'
import time_is_money from '../../Images/lower_search_cost.png'
import background_circle from '../../Images/background.png'
import clock from '../../Images/clock.png'
import Steps4 from '../4Steps/Steps4'



import Slide from 'react-reveal/Slide';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';


const Service = () => {

    return (
        <>
            <div className={styles.container}>

                {/* HEADING SECTION */}
                <div className={styles.heading}>
                    <div className={styles.left}>
                        Your Benefits
                    </div>
                    <div className={styles.right}>
                    </div>
                    <Slide left cascade>
                        <img
                            style={{
                                marginBottom: "50px",
                                marginLeft: "-30px"
                            }}
                            src={star}
                            alt="" />
                    </Slide>
                </div>


                {/* SERVICE SECTION */}
                <div className={styles.main_container}>
                    <div className={styles.middle_container}>
                        <div className={styles.circle1}>
                            <img src={better} alt="" />
                            <p> Better Match Rates</p>
                        </div>
                        <div className={styles.circle2}>
                            <img src={time_is_money} alt="" />
                            <p>Lower Search <br /> Costs</p>
                        </div>
                        <div className={styles.circle1}>
                            <img src={clock} alt="" />
                            <p>Lower Search <br /> Time</p>
                        </div>
                    </div>
                </div>



                {/* <---------------- SERVICE PHONE CONTAINER VIEW --------------> */}
                <div className={styles.container1_phone}>
                    <div className={styles.container1_left_phone}>
                        <div className={styles.circle1_phone}>
                            <img src={better} alt="" />
                            <p> Better Match Rates</p>
                        </div>
                        <div className={styles.circle2_phone}>
                            <img src={time_is_money} alt="" />
                            <p>Lower search costs</p>
                        </div>
                        <div className={styles.circle1_phone}>
                            <img src={clock} alt="" />
                            <p>Lower search time</p>
                        </div>
                    </div>
                    {/* <div className={styles.container1_right_phone}> */}

                    {/* </div> */}
                </div>


                {/* 4 STEPS CONTIANER MOVED IN AFTER CLIENT CR POINTS */}
                <Steps4 />


                {/* PHONE SECTION */}
                <div className={styles.sub_container}>
                    <div className={styles.left}>
                        Sneak peak of what is in store for your
                        <div className={styles.flex_button}>
                            <Link to='https://apps.apple.com/in/app/soulsync/id6478204218'><img src={app_store} alt="" /></Link>
                            <Link to='https://play.google.com/store/apps/details?id=in.applore.soulsync&pcampaignid=web_share'><img src={play_store} alt="" /></Link>
                        </div>
                    </div>

                    {/* <Carousel
                        autoPlay={true}
                        infiniteLoop={true}
                    > */}
                    <Slide left>
                        <div className={styles.right}>
                            <div className={styles.circle}>
                                <img src={background_circle} alt="" />
                            </div>
                            <div className={styles.phone}>
                                <Carousel
                                    infiniteLoop={true}
                                    autoPlay={true}
                                    showArrows={false}
                                    showIndicators={false}
                                    showThumbs={false}
                                    transitionTime={1000}
                                    interval={1500}
                                    showStatus={false}
                                >
                                    {/* <img src={phone} alt="" /> */}
                                    {/* <img src={phone} alt="" /> */}
                                    <img src={phone} alt="profile1" />
                                    <img src={phone2} alt="profile2" />
                                </Carousel>
                            </div>
                        </div>
                    </Slide>
                    {/* </Carousel> */}
                    <div className={styles.right_mobile}>
                        <div className={styles.flex_button}>
                            <Link to='https://apps.apple.com/in/app/soulsync/id6478204218'><img src={app_store} alt="" /></Link>
                            <Link to='https://play.google.com/store/apps/details?id=in.applore.soulsync&pcampaignid=web_share'><img src={play_store} alt="" /></Link>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Service