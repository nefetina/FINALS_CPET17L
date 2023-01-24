import styles from "../components/Register.module.css";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import React, {useState } from 'react'
import Axios from 'axios' 
import {Alert} from 'react-bootstrap';

export default function reg() {
    const [rUser, setUser] = useState('')
    const [rEmail, setEmail] = useState('')
    const [rPass, setPass] = useState('')
    const [rCpass, setCpass] = useState('')
    const [flag, setFlag] = useState(false)
    const [regStatuseErr, setRegstaterr] = useState('')
    
    const register = () =>{
    
        Axios.post('http://192.168.254.115:3000/app',{
            username: rUser, 
            email: rEmail, 
            password: rPass,
            cpass: rCpass
        }).then((response)=>{
            console.log(response)
            if (response.data.message == "Successfully Registered"){
            window.location.href='./login'
            }else{
            setRegstaterr(response.data.message)
            setFlag(true);
            }
            
        })
    
    
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
                    <p className={styles.text1}>Register Account</p>
                    <section>

                        
                        <div>
                          <div className={styles.inputs}>
                            {flag &&(<Alert color="primary" variant="danger" className={styles.alert}>{regStatuseErr}</Alert>)}
                            <input type="text" className={styles.input1} onChange={(e)=>{setUser(e.target.value);}} id="regUsername" placeholder='Username' required />
                            <input type="text" className={styles.input1} onChange={(e)=>{setEmail(e.target.value);}} id="regEmail" placeholder='Email' required />
                            <input type="password" className={styles.input1} onChange={(e)=>{setPass(e.target.value);}} id="regPassword" placeholder='Password' required />
                            <input type="password" className={styles.input1} onChange={(e)=>{setCpass(e.target.value);}} id="regPasswordre" placeholder='Confirm Password' required />
                          </div>
                          <div className={styles.buttons}>
                            <button className={styles.btn1} onClick={register} type="submit">Signup</button>
                          </div>
                          <div className={styles.forgot}>
                            <a href="/login">Already have an Account?</a>
                          </div>
                            
                              
                            
                        </div>
                          
                    </section>
                    
                    
                </div>
            
            </div>
        
        
        </div>
    
    );
};


