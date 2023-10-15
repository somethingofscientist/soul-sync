import React from 'react'
import About from '../components/about/About'
import Footer from '../components/footer/Footer'
import Service from '../components/service/Service'
import Hero from '../components/hero/Hero'
import ProblemSolution from '../components/problemSolution/ProblemSolution'
import Steps4 from '../components/4Steps/Steps4'

const HomeScreen = () => {
    return (
        <>
            <Hero />
            <About />
            <ProblemSolution />
            <Steps4 />
            <Service />
            <Footer />
        </>
    )
}

export default HomeScreen