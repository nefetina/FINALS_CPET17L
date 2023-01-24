import styles from "./Uifundamental.module.css";

const Fundamental = () => {
    return(
        <div className= {styles.container}>
            <div className= {styles.content1}>
                <div className={styles.childcontent}>
                    <h1>UI Design Fundamentals</h1>
                    <p>Predictable and seamless elements, such as buttons</p> 
                    <p>Effective navigation, such as clearly labeled icons</p> 
                    <p>Frictionless and invisible interactions</p> 
                    <p>Purposeful and clear tasks or goals</p> 
                    <p>Guided behavior with design patterns, and clear hierarchy and readability</p> 
                    <p>Key features catch the user’s attention</p>
                </div>
                    
                
            </div>
            <div className= {styles.content2}>
                
            </div>
        </div>
    );
};


export default Fundamental;