import React from 'react'
import styles from './Privacy.module.css';

const Refund = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.heading}>B) Refund & Cancellation policy</div>
                <div className={styles.text} style={{ padding: " 0 0 200px 0" }}>
                    The payment for service once subscribed to by the User is not refundable and any amount paid shall stand appropriated.Refund if any will be at the sole discretion of the Company and it offers no guarantees whatsoever for the accuracy or timeliness of the refunds reaching the User's card/bank accounts.
                </div>
            </div>
        </>
    )
}

export default Refund