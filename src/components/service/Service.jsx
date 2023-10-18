import styles from './Service.module.css';
import phone from '../../Images/mobile1.png'
import google from '../../Images/google.png'
import star from '../../Images/StarFour.png'
import better from '../../Images/better.png'
import lower from '../../Images/lower.png'
import assess from '../../Images/assess.png';
import high from '../../Images/hgh.png'
import background_circle from '../../Images/background.png'
import Steps4 from '../4Steps/Steps4'



import Slide from 'react-reveal/Slide';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const Service = () => {

    return (
        <>
            <div className={styles.container}>

                {/* HEADING SECTION */}
                <div className={styles.heading}>
                    <div className={styles.left}>
                        Our service proposition
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
                <div className={styles.container1}>
                    <div className={styles.container1_left}>
                        <div className={styles.circle1}>
                            <img src={better} alt="" />
                            <p> Better Match Rates</p>
                        </div>
                        <div className={styles.circle2}>
                            <img src={lower} alt="" />
                            <p>Lower search time & cost</p>
                        </div>
                    </div>
                    <div className={styles.container1_right}>
                        <div className={styles.circle3}>
                            <img src={high} alt="" />
                            <p>High quality options</p>
                        </div>
                        {/* <div className={styles.circle4}>
                            <img src={assess} alt="" />
                            <p>Assess matches better</p>
                        </div> */}
                    </div>
                </div>



                {/* SERVICE PHONE CONTAINER */}
                <div className={styles.container1_phone}>
                    <div className={styles.container1_left_phone}>
                        <div className={styles.circle1_phone}>
                            <img src={better} alt="" />
                            <p> Better Match Rates</p>
                        </div>
                        <div className={styles.circle2_phone}>
                            <img src={lower} alt="" />
                            <p>Lower search <br /> time & cost</p>
                        </div>
                    </div>
                    <div className={styles.container1_right_phone}>
                        <div className={styles.circle3_phone}>
                            <img src={high} alt="" />
                            <p>High quality options</p>
                        </div>
                        {/* <div className={styles.circle4_phone}>
                            <img src={assess} alt="" />
                            <p>Assess matches better</p>
                        </div> */}
                    </div>
                </div>

                {/* 4 STEPS CONTIANER MOVED IN AFTER CLIENT CR POINTS */}
                <Steps4 />


                {/* PHONE SECTION */}
                <div className={styles.sub_container}>
                    <div className={styles.left}>
                        Sneak peak of what is in store for you
                        <img src={google} alt="" />
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
                                    <img src={phone} alt="" />
                                    <img src={phone} alt="" />
                                    <img src={phone} alt="" />
                                </Carousel>
                            </div>
                        </div>
                    </Slide>
                    {/* </Carousel> */}
                    <div className={styles.right_mobile}>
                        <img src={google} alt="" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Service