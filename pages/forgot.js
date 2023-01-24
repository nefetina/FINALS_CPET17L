import styles from "../components/forgot.module.css";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import React, {useState } from 'react'
import Axios from 'axios' 
import {Alert} from 'react-bootstrap';


export default function log() {
    const [Email, setEmail] = useState('')
    const [NewPass, setNewPass] = useState('')
    const [CPass, setCPass] = useState('')
    const [flag, setFlag] = useState(false)
    
    const [StatuseErr, setstaterr] = useState('')
    
    const forgotpass = () =>{
    
        Axios.post('http://192.168.254.115:3000/forgotpass',{
            email: Email, 
            newpassword: NewPass,
            newpassword1: CPass
        }).then((response) => {
            if (response.data.message == 'Successfully Reset Password'){
              window.location.href='/login'
            }else{
                setstaterr(response.data.message)
                setFlag(true);
            }
          });
    
    
        };

    
      
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
                        <p className={styles.text1}>Forgot Password</p>
                        <section>

                            <div className={styles.inputs}>
                              {flag &&(<Alert color="primary" variant="danger">{StatuseErr}</Alert>)}
                              
                              
                                <input type="text" className={styles.input1} onChange={(e)=>{setEmail(e.target.value);}} id="emailfp" placeholder='Email' required />
                                <input type="password" className={styles.input1} onChange={(e)=>{setNewPass(e.target.value);}} id="Passwordfp" placeholder='New Password' required />
                            
                            
                                <input type="password" className={styles.input1} onChange={(e)=>{setCPass(e.target.value);}} id="Passwordfp" placeholder='Confirm Password' required />
                          
                            </div>
                            <div className={styles.buttons}>
                        
                              <br/>
                              <div className={styles.buttons1}>
                                <button className={styles.btn1} onClick={forgotpass} type="submit">Submit</button>
                              </div>
                              <div className={styles.buttons1}>       
                                <button className={styles.btn1}><a href="/login" className={styles.dec}>Back</a></button>
                              </div>
                              

                            </div>
                            
                            
                              
                        </section>
                        
                        
                    </div>
                
            </div>
        
        
        </div>
    
    );
};

