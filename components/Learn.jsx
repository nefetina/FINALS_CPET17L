import styles from "./Learn.module.css";
import Link from "next/link";

const third = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content1}>
                
                <div className={styles.contents}>
                    <p  className={styles.center}>LEARN</p>
                    <p>Computer Programming</p>
                    <p>• Database Management</p>
                    <p>• Web Development</p>
                    <p>• Deployment</p>
                    <p>• UI Designing</p>
                    <div className={styles.center1}>
                        <button className={styles.btn}><Link href="/secondwindow" >EXPLORE</Link ></button>
                    </div>
                    
                </div>
                
            </div>
            <div className={styles.content2}>
            </div>
        </div>
    );
};

export default third;