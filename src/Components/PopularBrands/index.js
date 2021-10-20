import "./brands.css";
import "../../styles/styles.css";

const PopularBrands = () => {
return(
    <div className="main_container column_container">
        <h2>
            Popular Brands
        </h2>
            <ul className="main_container brandcar_container">
                <buttons className="main_container brandcar_btn">
                   <span> Ford </span>
                </buttons>
                <buttons className="main_container brandcar_btn">
                    View All Cars
                </buttons>
            </ul>
        {/* <img className="bodytype_image" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-chevrolet-corvette-z06-1607016574.jpg?crop=0.737xw:0.738xh;0.181xw,0.218xh&resize=640:*" />
        <img className="bodytype_image" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-chevrolet-corvette-z06-1607016574.jpg?crop=0.737xw:0.738xh;0.181xw,0.218xh&resize=640:*" /> */}
    </div>
)
}

export default PopularBrands;