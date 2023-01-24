import styles from "./Option.module.css";

const fourth = () => {
    return (
        <div className= {styles.base}>
            <div className= {styles.name}>
                <p>WHO WE ARE</p>
            </div>
            <div className= {styles.container}>
                <div className = {styles.develop}>
                <img src = "/image/tomas.png" />
                <div className={styles.description}>
                     <h4><b>NEFETINA IRA TOMAS</b></h4>
                     <p>Project Manager</p>
                     <p>BET-COET-4B</p>
                </div>
                </div>
                <div className = {styles.develop}>
                <img src = "/image/corpuz.png" />
                <div className={styles.description}>
                     <h4><b>JOYCELYN CORPUZ</b></h4>
                     <p>Developer</p>
                     <p>BET-COET-4B</p>
                </div>
                </div>
                <div className = {styles.develop}>
                <img src = "/image/miole.png" />
                <div className={styles.description}>
                     <h4><b>CHRICHELLE MIOLE</b></h4>
                     <p>Designer</p>
                     <p>BET-COET-4B</p>
                </div>
                </div>
                <div className = {styles.develop}>
                <img src = "/image/ramos.png" />
                <div className={styles.description}>
                     <h4><b>DANIELA RAMOS</b></h4>
                     <p>Developer</p>
                     <p>BET-COET-4B</p>
                </div>
                </div>
                <div className = {styles.develop}>
                <img src = "/image/mico.png" />
                <div className={styles.description}>
                     <h4><b>MICO RYAN SAN PABLO</b></h4>
                     <p>Designer</p>
                     <p>BET-COET-4B</p>
                </div>
                </div>
            </div>
        </div>

    );

};

export default fourth;