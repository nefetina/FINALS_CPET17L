import styles from "./Navbar.module.css";
import Link from 'next/link'
const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.container1}>
                <div className={styles.logo}>
                    <img src="/image/logo.png" />
                </div>
                <div className={styles.name}>
                    <div className={styles.tech}>
                        <h2>Tech</h2>
                    </div>
                    <div className={styles.people}>
                        <h2>People</h2>
                    </div>
                </div>
                <div className={styles.buttons}>
                    <Link href="/">HOME</Link>
                    <Link href="/aboutus">ABOUT US</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;