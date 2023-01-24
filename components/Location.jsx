import styles from "./Location.module.css";

const Location = () => {
    return(
        <div className= {styles.container}>
            <div className={styles.content1}>
            <p>Dasma, Cavite</p>
            </div>
            <div className = {styles.content2}>
                <div className = {styles.childcontent}>
                    <h1>ABOUT US</h1>
                    <p>TechPeople shares knowledge and information about the amazing field of programming.</p>
                </div>
            
            </div>
            
        </div>
    );
};


export default Location;