import "./featured.css";
import "../../styles/styles.css";

const FeaturedCars = () => {
return(
    <div className="main_container column_container">
        <h2>
            Featured Assured Cars
        </h2>
            <ul className="main_container featuredcar_container">
                <buttons className="main_container featuredcar_btn">
                   <span> Newly Added </span>
                </buttons>
                <buttons className="main_container featuredcar_btn">
                    More Popular
                </buttons>
            </ul>
        {/* <img className="bodytype_image" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-chevrolet-corvette-z06-1607016574.jpg?crop=0.737xw:0.738xh;0.181xw,0.218xh&resize=640:*" />
        <img className="bodytype_image" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-chevrolet-corvette-z06-1607016574.jpg?crop=0.737xw:0.738xh;0.181xw,0.218xh&resize=640:*" /> */}
    </div>
)
}

export default FeaturedCars;