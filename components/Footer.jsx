import styles from "./Footer.module.css";

const footer = () => {
    return (
        <div className = {styles.container}>
                <div className={styles.content1}>
                    <div> 
                        <div className={styles.contents}>
                            <div className = {styles.social}>
                                <p>FOLLOW US</p>
                                <div className= {styles.follow}>
                                    <img src = "/image/fb.png" className={styles.pics}/>
                                    <img src = "/image/ig.png"  className={styles.pics}/>
                                    <img src = "/image/tweet.png" className={styles.pics}/>
                                </div>
                            </div>
                            <div className = {styles.contact}>
                                <p>CONTACT US</p>
                                <div className= {styles.phone}>
                                    <img src = "/image/phone.png" className= {styles.icon} /><p>09651234512</p>
                                </div>
                            </div>
                        </div>
                        <div className = {styles.one}>
                                <p>POWERED BY: TechPeople</p>
                                <p className = {styles.foot}>This website is for educational purposes only</p>
                        </div>
                    </div>
                        
                        
                    
                </div>
                
        </div>
    );


};

export default footer;