import React, { useState } from 'react'
import styles from './Sample.module.css';


const Sample = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.left}>
                    Heading
                </div>
                {/* ṭhat orange line */}
                <div className={styles.right}></div>
            </div>
            <div className={styles.container}>
                <div className={styles.left}>
                    Heading With Long And More Content
                </div>
                {/* ṭhat orange line */}
                <div className={styles.right}></div>
            </div>
            <div className={styles.container}>
                <div className={styles.left}>
                    Heading With Long And More Content with more more Content
                </div>
                {/* ṭhat orange line */}
                <div className={styles.right}></div>
            </div>
        </>
    );
};


export default Sample