import styles from "./About.module.css";

const Info = () => {
    return(
        <div className= {styles.container}>
            <div className= {styles.content1}>
                <div className={styles.childcontent}>
                    <div className={styles.quote}>
                        <p>“Before software can be reusable it first has to be usable.”</p>
                    </div>
                    <div className={styles.author}>
                        <p>-Ralph Johnson</p>
                    </div>
                    
                </div>
           
            </div>
        </div>
    );
};


export default Info;