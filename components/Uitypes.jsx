import styles from "./Uitypes.module.css";
import Link from 'next/link'

const Design = () => {
    return(
        <div className= {styles.container}>
            <div className= {styles.content1}>
                
            </div>
            <div className= {styles.content2}>
                <div className={styles.childcontent}>
            
                    <h1>Types of user interfaces</h1>
                    <p>Graphical user interface (GUI)</p>
                    <p>Command line interface (CLI)</p>
                    <p>Menu-driven user interface touch user interface.</p>
                    <p>Voice user interface (VUI)</p>
                    <p>Form-based user interface.</p>
                    <p>Natural language user interface.</p>
                    
                </div>
                
                

            </div>
            <div className= {styles.content3}>
                
            
                    
                    <div className= {styles.btn}>
                        <Link href="/secondwindow">BACK</Link>
                    </div>
             
                
                

            </div>
        </div>
    );
};


export default Design;