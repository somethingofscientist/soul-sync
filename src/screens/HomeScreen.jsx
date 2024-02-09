import React from 'react'
import About from '../components/about/About'
import Footer from '../components/footer/Footer'
import Service from '../components/service/Service'
import Hero from '../components/hero/Hero'
import ProblemSolution from '../components/problemSolution/ProblemSolution'
import Steps4 from '../components/4Steps/Steps4'
import Sample from '../components/sample/Sample'
import styles from './HomeScreen.module.css'
import { FaWhatsapp } from "react-icons/fa";



const HomeScreen = () => {
    const phoneNumber = '+917876149249';
    const whatsappUrl = `https://wa.me/${phoneNumber}`;

    return (
        <>
            <div className={styles.container}>
                <Hero />
                <About />
                <ProblemSolution />
                <Service />
                <Footer />
                <a href={whatsappUrl} target='_blank'>
                    <div className={styles.whatsapp}>
                        <FaWhatsapp />
                        <span className={styles.tooltip}>speak to us now </span>
                    </div>
                </a>
            </div>

            {/* <Steps4 /> */}
            {/* <Sample /> */}
        </>
    )
}

export default HomeScreen