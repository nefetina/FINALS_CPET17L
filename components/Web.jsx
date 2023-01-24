import styles from "./Web.module.css";

const webui = () => {
    return (
        <div className= {styles.container}>
            <div className= {styles.content1}>
                
            </div>
            <div className= {styles.content2}>
                <div className={styles.childcontent}>
                    <h1>What is Web Development?</h1>
                    <p>Web development is the work involved in developing a website for the Internet 
                        (World Wide Web) or an intranet (a private network). Web development can range from developing 
                        a simple single static page of plain text to complex web applications, electronic businesses,
                        and social network services. A more comprehensive list of tasks to which Web development commonly
                        refers, may include Web engineering, Web design, Web content development, client liaison, client-side/server-side scripting, 
                        Web server and network security configuration, and e-commerce development.</p>
                </div>

                
            </div>
        </div>
    );
};

export default webui;