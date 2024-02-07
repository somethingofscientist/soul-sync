import React from 'react'
import styles from './Privacy.module.css';
import { Link } from 'react-router-dom';


const Privacy = () => {
    return (
        <>
             {/* <Link to='/'>
                <div className={styles.back_button}>
                Back To Home
                </div>
            </Link> */}
            <div className={styles.container}>



                <div className={styles.heading}>A) Privacy and Data Security</div>
                <div className={styles.sub_points}>
                    <ol>
                        <li>
                            <h2> Data Retention:</h2> User data will be retained for a period of one year beyond the subscription timelines.After this period, the data will be securely deleted.In case of withdrawal of User consent, User data shall be securely deleted with immediate effect / within a maximum of 90 days.
                        </li>
                        <li>
                            <h2>Security Measures:</h2> We employ industry - standard security measures to protect your data, including encryption during transmission, regular security audits, restricted access within our organization, and strong password policies.
                        </li>

                        <li>
                            <h2>Data Security:</h2>
                            <div className={styles.sub_points_again}>
                                <ul>
                                    <li>
                                        We maintain an information security program that includes appropriate and documented technical and organizational measures to ensure a level of security appropriate to the risk of processing User data under this Agreement, including any specific measures required by applicable Data Protection Laws.
                                    </li>
                                    <li>
                                        User expressly acknowledges that the Platform provides security features and functionality that User can use to protect User data.
                                    </li>
                                    <li>
                                        User is solely responsible for taking appropriate risk - based steps to protect the security of user’s account and User data within user’s control, including by using security features and functionality provided by the Platform.
                                    </li>
                                    <li>
                                        User also is solely responsible for ensuring that all content that User places or causes to be placed within the Platform is free of vulnerabilities that could result in the compromise of User data and the Platform’s systems, including but not limited to malicious software.The Platform is not responsible for backing up User data.
                                    </li>
                                </ul>
                            </div>

                            <li>
                                <h2>Data Security Incidents</h2>
                                <div className={styles.sub_points_again}>
                                    <ul>
                                        <li>
                                            We offer Users extensive opportunities to access and control User data processed on user’s behalf.The Platform is not responsible for any accidental or unlawful destruction, loss, alteration, unauthorized disclosure of, or access to User data that does not result from a compromise of the Platform’s systems.Examples of Security Incidents for which the Company is not responsible include user’s failure to maintain the secrecy of its passwords, downloading of malicious content, or any other security vulnerability caused by or introduced into the Platform and user’s hosted environment by user.
                                        </li>
                                        <li>
                                            The Company will use commercially reasonable efforts to notify User of a breach of security of our systems leading to the accidental or unlawful, destruction, loss, alteration, unauthorized disclosure of, or access to User data(“Security Incident”) within the time period required under applicable law.
                                        </li>
                                        <li>
                                            The Company will take appropriate, risk - based steps that are reasonably necessary to contain, mitigate, and remediate a Security Incident without unreasonable delay.
                                        </li>
                                        <li>
                                            The Company’s acknowledgement of a Security Incident or decision to notify User of a Security Incident is not an admission of fault or liability.
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </li>
                    </ol>
                </div>



            </div>
        </>
    )
}

export default Privacy