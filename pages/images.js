import styles from '../styles/image.module.css'
import Navbar from "../components/Navbar";

function RenderImage({ data }) {
    return(    // Get the image data
    
        <div className={styles.bg} >
            <Navbar/>
            <div className={styles.text} >
                <div>
                    <div className={styles.texture}>  
                        <h1>Cam Detector Captured Moments</h1>
                    </div>
                    
                    <div className={styles.texture1}>
                   
                        <h4>POWERED BY: TechPeople</h4>
                   
                    </div>
               
                    
                </div>
               
                
            </div>
            
            {data.images.map(function(images){                
                let imagess = images['capture']['data'];
                
                // Convert into blob into string with charset=utf-8
                let image = "data:image/png;base64," + Buffer.from(imagess, 'base64').toString('utf-8');
                // string date and time
                let date_time = images['date_time'];
                // Render into HTML
                return (
                    <div className={styles.main2}>
                            
                        <div className={styles.pol}>
                            <div className={styles.tag}>
                                <p> Motion Detected at: {date_time}</p>
                            </div>
                            <div className={styles.img}>
                                <img className={styles.pic} src={image} alt=""  width="500" height="500" />
                            </div>
                            
                        
                        </div>
                    
                    </div>
                        )
            })}
        </div>
    )
}

export async function getServerSideProps() {
    // Fetch data from the server
    const response = await fetch('http://192.168.254.115:3000/render-image');

    // Get the json response
    const data = await response.json();
    if ( !data ) {
        return {
            notFound: true,
        }
    }
    return {
        props: { data },
    }
}

export default RenderImage;
