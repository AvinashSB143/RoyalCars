import { Component } from 'react';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import NavBar from "../Navigation";
import RecommendedCars from "../Recommendation";
import AssuredBenefits from "../AssuredBenefits";
import Working from "../Working";
import LifeStyle from "../LifeStyle";
import BodyTypeCars from "../bodyType";
import PopularBrands from "../PopularBrands";
import FeaturedCars from "../Featured";
import { useState } from "react";
import StarRatingComponent from 'react-star-rating-component';
import LifeStyleFeature from "../LifeStyleFeature";
// import SliderTest from "../Login"
import "./homepage.css";

class CustomerFeedback extends Component {
  constructor(props) {
    super(props);
    this.state = { // set default states
      comments: [],
      formControls: {
          email: {
            value: ''
          },
          userName: {
            value: ''
          },
          comment: {
            value: ''
          }
      },
      rating: 1,
      chartDataHeaders: ["Comment index", "Rating"],
      chartData: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeHandler = event => {
      
      const name = event.target.name;
      const value = event.target.value;
    
      this.setState({
        formControls: {
            ...this.state.formControls,
            [name]: {
            ...this.state.formControls[name],
            value
          }
        }
      });
  }

  handleSubmit(event) {
    event.preventDefault(); // stop form from submitting and do actions below

    const comments = [...this.state.comments, {
        comment: this.state.formControls.comment.value, 
        name: this.state.formControls.userName.value, 
        rating: this.state.rating
    }]
    this.setState({
      comments: comments,
      formControls: {
          comment: {
            value: ''
          }
      },
      rating: 1
    });
    this.props.setShowFeedBack(!this.props.showFeedBack)
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }

  render() {
    return (
      <div className="slab">
        <div className="container">
          <h1 className="below-16">Customer feedback</h1>
          <div className="row">
            <div className="col-md-7">
              <form onSubmit={this.handleSubmit}>      
                <div className="below-16 top-24">
                  <h2 className="mega">Please include your rating:</h2>
                  <StarRatingComponent 
                    name="rate1" 
                    starCount={5}
                    value={this.state.rating}
                    onStarClick={this.onStarClick.bind(this)}
                  />
                </div>
                <div>
                <label htmlFor="comment" className="hidden">Your comment </label>
                <textarea name="comment" value={this.state.formControls.comment.value} onChange={this.changeHandler} placeholder="Please leave your comment" required />
                </div>
                {/* <button type="submit" value="Submit" /> */}
                <div className='main_container feedbackBtns'>
                <button style={{ background: "green",color: "white"}} onClick={this.handleSubmit}>Submit</button>
                <button style={{ background: "red",color: "white"}} onClick={() => {
                  this.props.setShowFeedBack(!this.props.showFeedBack)
                }}>Cancel</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const HomePage = (props) => {
  const { validateUser } = props;
  const [showFeedBack, setShowFeedBack] = useState(false)
  return (
    <div >
     {showFeedBack && <div className='customerFeedBack'>
        <CustomerFeedback setShowFeedBack={setShowFeedBack} showFeedBack={showFeedBack}/>
      </div>}

      <div id="feedback">
        <button className="sapMBtnBase ipsButton sapMBtn" onClick={ () => setShowFeedBack(!showFeedBack)}>
          <span className="sapMBtnHoverable sapMFocusable sapMBtnInner sapMBtnText sapMBtnEmphasized">
            <span className="sapMBtnContent">
            <bdi id="__button0-BDI-content">Feedback</bdi>
              </span>

          </span>

        </button>
        
      </div>
        {/* <NavBar /> */}
        <RecommendedCars />
        <AssuredBenefits />
        <Working />
        <LifeStyle />
        <BodyTypeCars />
        <PopularBrands />
        {/* <FeaturedCars /> */}
        {/* <SliderTest /> */}
    </div>
  );
};

export default HomePage;
