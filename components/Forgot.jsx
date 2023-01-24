import styles from "./forgot.module.css";
import Link from 'next/link'

const forgot = () => {
    return (
        <div className={styles.container}>
  
           <div className={styles.content1}>
                <div className={styles.childcontent}>
                  
              
                    <div className={styles.text}>
                        <picture >
                          <img className={styles.logo} src="/image/logo.png" alt="none"/>
                        </picture>
                        
                        <p className = {styles.tech}>Tech</p>
                        <p className = {styles.people}>People</p>
    
                    </div>
                    <div className={styles.forgot}>
                    
                        <p className={styles.question}>Forgot your password?</p>
                        <p className={styles.state1}>Enter your email address below</p>
                        <p className={styles.state2}>and we will email instructions for setting a new one. </p>
                        
    
                    </div>
                    <div className={styles.inputs}>
  
         
                      <input className={styles.input1}type="text" placeholder="Email"/>
                    </div>
                    
                  
                   
                    <div className={styles.buttons}>
                        
                        <button className={styles.btn1}>Reset</button>
                        <div className={styles.lines}>
                          <div className={styles.line}></div>
                        </div>
                        
                        <button className={styles.btn2}>Back</button>
                        
                        
                    </div>
                    
                    
                    
                </div>
               
            </div>
         
           
        </div>
       
      );
};

export default forgot;