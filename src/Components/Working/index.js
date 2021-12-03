import {Link} from 'react-router-dom';
import "./working.css";
import "../../styles/styles.css";


const Working = () => {
return (
  <div className="main_container column_container working_container">
    <div className="working__Heading">
      <h2>How Royal Cars Works</h2>
      <p margin="10px auto" className="mobile_car_working_helperText">
        You won’t just love our cars, you’ll love the way you buy them.
      </p>
    </div>
    <div className="working_images">
      <div className="working_img">
        <img
          style={{ width: "100%" }}
          src="https://media.istockphoto.com/photos/sea-of-hands-picture-id857146092?b=1&k=20&m=857146092&s=170667a&w=0&h=6LFXDhgmrAKxwIFFgt5ctdMooP_WgLlmeX6yhq7a174="
        />
        <h3 style={{ textAlign: "center" }}>
          Choose from the best pre-owned cars
        </h3>
        <p style={{ textAlign: "center", margin: 0 }}>
          2000+ fully inspected cars online. Buy with money back guarantee.
        </p>
        <div style={{ marginTop: "10px" }}>
          <Link to="#"> View All Cars</Link>
        </div>
      </div>
      <div className="working_img">
        <img
          style={{ width: "100%" }}
          src="https://media.istockphoto.com/photos/sea-of-hands-picture-id857146092?b=1&k=20&m=857146092&s=170667a&w=0&h=6LFXDhgmrAKxwIFFgt5ctdMooP_WgLlmeX6yhq7a174="
        />
        <h3 style={{ textAlign: "center" }}>
          Take a test drive at your Home or Spinny Hub
        </h3>
        <p style={{ textAlign: "center", margin: 0 }}>
          Sanitised cars for every test drive. Executives trained for COVID
          protection.
        </p>
        <div style={{ marginTop: "10px" }}>
          <Link to="#"> Book Test Drive</Link>
        </div>
      </div>
      <div className="working_img">
        <img
          style={{ width: "100%" }}
          src="https://media.istockphoto.com/photos/sea-of-hands-picture-id857146092?b=1&k=20&m=857146092&s=170667a&w=0&h=6LFXDhgmrAKxwIFFgt5ctdMooP_WgLlmeX6yhq7a174="
        />
        <h3 style={{ textAlign: "center" }}>
          Online Payment. Doorstep Delivery.
        </h3>
        <p style={{ textAlign: "center", margin: 0 }}>
          Contactless transaction 5-day money back guarantee.
        </p>
        <div style={{ marginTop: "10px" }}>
          <Link to="#"> Buy a Car</Link>
        </div>
      </div>
    </div>
  </div>
);
}

export default Working;