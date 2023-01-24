import styles from "./Deploy.module.css";

const Dep = () => {
    return(
        <div className= {styles.container}>
            <div className= {styles.content1}>
                
            </div>
            <div className= {styles.content2}>
                    <div className={styles.childcontent}>
                        
                        <h1>What is Web Deploy?</h1>
                        <p>Web Deploy is an extensible client-server tool for syncing content and configuration to IIS. Web Deploy is used primarily in two scenarios:
                        Developers use it to sync (aka ‘publish') a compiled web applications (ASP .Net, PHP etc) from developer tools (Visual Studio, WebMatrix, etc) to IIS
                        IT professionals use it to migrate websites & applications from an operating system running an older version of IIS such as IIS6 to an operating system running a newer version of IIS such as IIS 7.5.</p>
                    </div>
            </div>  
        </div>
    );
};


export default Dep;