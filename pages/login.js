import styles from "../components/Login.module.css";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import React, {useState } from 'react'
import Axios from 'axios' 
import {Alert} from 'react-bootstrap';


export default function log() {
    const [User, setUser] = useState('')
    const [Pass, setPass] = useState('')
    const [flag, setFlag] = useState(false)
    
    const [StatuseErr, setstaterr] = useState('')
    
    const LogIn = () =>{
    
        Axios.post('http://192.168.254.115:3000/LogIn',{
            username: User, 
            password: Pass,
        }).then((response) => {
            if (response.data.message == 'Verified'){
              window.location.href='/images'
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
                      <p className={styles.text1}> Login to access the Project</p>
                      <section>

                          

                            <div className={styles.inputs}>
                              
                              {flag &&(<Alert color="primary" variant="danger" className={styles.alert}>{StatuseErr}</Alert>)}
                              
                              <input type="text" className={styles.input1} onChange={(e)=>{setUser(e.target.value);}} id="Usernamelog" placeholder='Username' required />
      
                              <input type="password" className={styles.input1} onChange={(e)=>{setPass(e.target.value);}} id="Passwordlog" placeholder='Password' required />
                            </div>
                            
                            <div className={styles.forgot}>

                                <p ><a href="/forgot" className = {styles.pass}>Forgot Password?</a></p>
                            </div>


                            <div className={styles.buttons}>
                        
                                <button className={styles.btn1} onClick={LogIn} type="submit">Login</button>
                                <div className={styles.lines}>
                                  <div className={styles.line}></div>
                                </div>
                                
                                <button className={styles.btn2}><a href="/register" className={styles.dec} >Sign Up</a></button>

                            </div>
                            
                           
                      </section>
                      
                      
                  </div>
              
          </div>
          
        
        </div>
    
    );
};

