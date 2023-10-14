import React from 'react'
import './style.css';


const Sample = () => {
    return (
        <>
            <section className="section-introduction">
                <h2 className="section-heading">Color pallete</h2>
                <div className="container">
                    <div id="dark-box">
                        <div className="brightgreen-circle circle ">
                            <p>brightgreen</p>
                            <span>#F4FF96</span>
                        </div>
                        <div className="yellowgreen-circle circle">
                            <p>yellowgreen</p>
                            <span>#ECF22E</span>
                        </div>
                        <div className="left-semi-circle semi-circle">
                            <p>White</p>
                            <span>#FFFFFF</span>
                        </div>
                    </div>
                    <div id="bright-box">
                        <div className="right-semi-circle semi-circle">
                            <p>Black</p>
                            <span>#000000</span>
                        </div>
                        <div className="applegreen-circle circle">
                            <p>applegreen</p>
                            <span>#BCDD15</span>
                        </div>
                        <div className="brightgreen-circle2 circle">
                            <p>brightgreen</p>
                            <span>#F4FF96</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Sample