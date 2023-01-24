import styles from "./Deployfundamental.module.css";
import Link from "next/link";

const fund = () => {
    return(
        <div className= {styles.container}>
            <div className= {styles.content1}>
                <div className={styles.childcontent}>
                <h1>Deployment Fundamentals</h1>
                <p>The major building blocks of the web are HTML, CSS, and JavaScript.  We will be talking about all three languages. 
                    We can also think of web development as being split into two main categories: front end and back end.</p>
                </div>
           
            </div>
            <div className= {styles.content2}>
       
            </div>
            <div className= {styles.content3}>
                <div className= {styles.btn}>
                    <Link href="/secondwindow">BACK</Link>
                </div>
  
            </div>
        </div>
    );
};

export default fund;