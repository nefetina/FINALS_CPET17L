import styles from "./Database.module.css";

const data = () => {
    return (
        <div className= {styles.container}>
            <div className= {styles.content1}>
                
            </div>
            <div className= {styles.content2}>
                <div className={styles.childcontent}>
                    <h1>What is Database Management?</h1>
                    <p>A database management system (DBMS) is system software for creating and managing databases. A DBMS makes it possible for end users 
                        to create, protect, read, update and delete data in a database. The most prevalent type of data managemen
                        t platform, the DBMS essentially serves as an interface between databases and users or application programs,
                        ensuring that data is consistently organized and remains easily accessible.</p>
                </div>
                
            </div>
        </div>
    );
};

export default data;