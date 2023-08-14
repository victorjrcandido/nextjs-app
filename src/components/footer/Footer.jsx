import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div>Copyright info</div>
            <div className={styles.social}>
                <Image src='/1.png' width={15} height={15} alt='Facebook icon' className={styles.icon} />
                <Image src='/2.png' width={15} height={15} alt='Instagram icon' className={styles.icon} />
                <Image src='/3.png' width={15} height={15} alt='Twitter icon' className={styles.icon} />
                <Image src='/4.png' width={15} height={15} alt='Youtube icon' className={styles.icon} />
            </div>
        </div>
    )
}

export default Footer