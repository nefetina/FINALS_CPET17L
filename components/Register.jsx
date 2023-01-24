import styles from "./Register.module.css";
import Link from 'next/link'
import React, {useState } from 'react'
import Axios from 'axios' 


export default function reg() {
    const [rUser, setUser] = useState('')
    const [rEmail, setEmail] = useState('')
    const [rPass, setPass] = useState('')
    const [rCpass, setCpass] = useState('')
    
    const [regStatuseErr, setRegstaterr] = useState('')
    
    const register = () =>{
    
        Axios.post('http://localhost:3000/insert',{
            username: rUser, 
            email: rEmail, 
            password: rPass,
            cpass: rCpass
        }).then((response)=>{
            console.log(response)
            if (response.data.message == "Successfully Registered"){
            window.location.href='./images'
            }else{
            setRegstaterr(response.data.message)
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
                    <h3 className='text-danger'>{regStatuseErr}</h3>
                    <form>
                        <div>
                        <label >Username</label>
                        <input type="text" name="username" className={styles.input1} id="name" placeholder="Enter name" values="" onChange={(e)=>{setUser(e.target.value);}}></input>
                        </div>   
                        <div>
                        <label >Email</label>
                        <input type="email" name="email" className={styles.input1} id="email" placeholder="Enter email" values="" onChange={(e)=>{setEmail(e.target.value);}}></input>
                        </div>
                        <div>
                        <label >Password</label>
                        <input type="password" name="password" className={styles.input1} id="password" placeholder="*********" values="" onChange={(e)=>{setPass(e.target.value);}}></input>
                        </div>
                        <div>
                        <label>Confirm Password</label>
                        <input type="password" name="password" className={styles.input1} id="password" placeholder="*********" values="" onChange={(e)=>{setCpass(e.target.value);}}></input>
                        </div>
                        <br></br>
                        <button type="submit" className={styles.btn1} onClick={register}> Submit </button>
                        <div>
                        <a href="/">Login</a>
                        </div>
                        
                    </form>
                    
                    
                </div>
            
            </div>
        
        
        </div>
    
    );
};


