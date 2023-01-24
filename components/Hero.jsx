import styles from "./Hero.module.css";
import Link from "next/link";

const Hero = () => {
    return (
      <div className={styles.container}>
        
        
         <div className={styles.content1}>
              <div className={styles.childcontent}>
                  <div className={styles.text}>
                      <p className = {styles.tech}>Tech</p>
                      <p className = {styles.people}>People</p>
  
                  </div>
                  <div className={styles.quote}>
                      <p className = {styles.tech}>The problem is yours, the solution is ours </p>
                      
                      
                  </div>
                  <div className={styles.quote}>
                      
                      <button className={styles.btn}><Link href="/login">SHOW PROJECT</Link></button>
                      
                      
                  </div>
                  
              </div>
             
          </div>
         <div className={styles.content2}>
              <img src="/image/person.png" className={styles.pic} />
         </div>
         
      </div>
     
    );
  };
  
  export default Hero;