import React from "react";
import styles from '@/styles/Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.section4outermost}>
            <div className={styles.left}>
                <p>If you are Looking for a web/front-end developer or need
                help with your project then feel free to contact me at
                <span><a href="mailto: djalfo18@gmail.com">djalfo18@gmail.com</a></span>
                </p>
            </div>
            <div className={styles.right}>
                <h1>
                Let&apos;s<br />
                Work<br />
                together
                </h1>
            </div>
        </div>
    )
}

export default Footer