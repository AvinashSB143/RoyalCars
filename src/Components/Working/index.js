import {Link} from 'react-router-dom';
import "./working.css";
import "../../styles/styles.css";


const Working = () => {
return(
    <div className="main_container column_container working_container">
            <div className="main_container column_container">
                <h2 style={{ margin: 0}}>
                    How Royal Cars Works
                </h2>
                <p margin="10px auto">
                You won’t just love our cars, you’ll love the way you buy them.
                </p>
            </div>
            <div className="working_images">
                <div className="working_img">
                    <img style={{width: "100%"}} src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-chevrolet-corvette-z06-1607016574.jpg?crop=0.737xw:0.738xh;0.181xw,0.218xh&resize=640:*" />
                    <h3 style={{textAlign: "center"}}>
                    Choose from the best
                    pre-owned cars
                    </h3>
                    <p style={{textAlign: "center", margin: 0}} >
                    2000+ fully inspected cars online. Buy with money back guarantee.
                    </p>
                    <div style={{marginTop: "10px"}}><Link to="#" > View All Cars</Link></div>

                </div>
                <div className="working_img">
                    <img style={{width: "100%"}} src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-chevrolet-corvette-z06-1607016574.jpg?crop=0.737xw:0.738xh;0.181xw,0.218xh&resize=640:*" />
                    <h3 style={{textAlign: "center"}}>
                    Take a test drive at your Home or Spinny Hub
                    </h3>
                    <p style={{textAlign: "center", margin: 0}} >
                    Sanitised cars for every test drive. Executives trained for COVID protection.
                    </p>
                    <div style={{marginTop: "10px"}}><Link to="#" > Book Test Drive</Link></div>

                </div><div className="working_img">
                    <img style={{width: "100%"}} src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-chevrolet-corvette-z06-1607016574.jpg?crop=0.737xw:0.738xh;0.181xw,0.218xh&resize=640:*" />
                    <h3 style={{textAlign: "center"}}>
                    Online Payment. Doorstep Delivery.
                    </h3>
                    <p style={{textAlign: "center", margin: 0}} >
                    Contactless transaction 5-day money back guarantee.
                    </p>
                    <div style={{marginTop: "10px"}}><Link to="#" > Buy a Car</Link></div>

                </div>

            </div>


        </div>
)
}

export default Working;