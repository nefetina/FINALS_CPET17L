import styles from "./Webtypes.module.css";
import Link from "next/link";

const uiweb = () => {
    return (
        
        <div className= {styles.container}>
            <div className= {styles.content1}>
                <div className={styles.childcontent}>
                
                    <h1>Types of Web Development</h1>
                    <p>• Front-end web development </p>
                    <p>• Back-end web development </p>
                    <p>• Full-stack web development</p>
                    <p>• Web designer</p>
                    <p>• Web programmer</p>
                    <p>• Content developer</p>
                    <p>• Webmaster</p>
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

export default uiweb;