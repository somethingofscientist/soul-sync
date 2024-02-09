import React from 'react'
import styles from './Contact.module.css';
import { Link } from 'react-router-dom';

const Contact = () => {
    const message = '';
    return (
        <>


            <div className={styles.container}>
                <div className={styles.heading}>Contact Us</div>
                <div className={styles.sub_heading}>
                    Operating & Registered address.
                </div>
                <div className={styles.sub_points}>
                    <ol>
                        <li>
                            9 Siris Road, DLF City Phase 3, Gurugran, Haryana, 122002
                        </li>
                    </ol>
                </div>


                <div className={styles.sub_heading}>
                    Contact Us
                </div>
                <div className={styles.sub_points}>
                    <ol>
                        <li>
                            {/* We can be reached by email at hello@thesoulsync.com */}
                            You can reach us by email at: <a href={`mailto:hello@thesoulsync.com?subject=Inquiry&body`}>hello@thesoulsync.com</a>
                            <br />
                            or via phone at <a href={`https://wa.me/+917876149249?text=${message}`} target="_blank" rel="noopener noreferrer">+91-7876149249</a>
                        </li>
                    </ol>
                </div>
            </div>
            <Link to='/'>
                <div className={styles.back_button}>
                    Back To Home
                </div>
            </Link>
        </>
    )
}

export default Contact