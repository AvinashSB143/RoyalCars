import "./benifits.css";
import "../../styles/styles.css";
import Logo from "../../images/Logo.png";

const AssuredBenifits = () => {
    return(
        <div className="main_container column_container">
            <div className="main_container column_container">
                <img src={Logo} width="100px" height="100px"/>
                <h1 style={{ margin: 0}}>
                    Royal Car benifits
                </h1>
                <p margin="10px auto">
                The sure road to Car Joy
                </p>
            </div>
            <div className="benifits_images">
                <img className="benifits_img" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-chevrolet-corvette-z06-1607016574.jpg?crop=0.737xw:0.738xh;0.181xw,0.218xh&resize=640:*" />
                <img className="benifits_img" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-chevrolet-corvette-z06-1607016574.jpg?crop=0.737xw:0.738xh;0.181xw,0.218xh&resize=640:*" />
                <img className="benifits_img" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-chevrolet-corvette-z06-1607016574.jpg?crop=0.737xw:0.738xh;0.181xw,0.218xh&resize=640:*" />
                <img className="benifits_img" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-chevrolet-corvette-z06-1607016574.jpg?crop=0.737xw:0.738xh;0.181xw,0.218xh&resize=640:*" />

            </div>


        </div>
    )
}

export default AssuredBenifits;