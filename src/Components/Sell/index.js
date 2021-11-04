import React from "react";
import "./sell.css";
import Feedback from "../Feedback";

export const FormFields = ({ name, value, component }) => {
  return (
    <div class="container_FormFields">
      <span>
        <div class="valueWrap">
          <label title="Model" className="title">
            {name}
          </label>
          <span title="Model" className="selected-value">
            {value}
          </span>
        </div>
      </span>
    </div>
  );
};

export const HowItsWork__listItem = ({
  heading,
  details,
  linkName,
  imgsrc,
}) => {
  return (
    <div class="HowItsWork__listItem">
      <img
        src="https://d1263yrto77i5b.cloudfront.net/0.2.1205/assets/images/pages/SellCar/components/HowItsWork/assets/hiw-1.png"
        alt="hiw-1.png"
        class=""
      />
      <div class="HowItsWork__contentSection">
        <p class="HowItsWork__heading">Instant online quote</p>
        <p class="HowItsWork__details">
          Fill in a few details about your car for an instant quote.
        </p>
        <a class="styles__btn" href="/check-car-valuation/">
          Get Quote
          <svg
            transform="rotate(0 0 0)"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#6300A3"
            width="9"
            height="9"
            viewBox="0 0 14 8"
          >
            <path
              fill="none"
              fill-rule="evenodd"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.5"
              d="M386 48L392 54 398 48"
              transform="translate(-385 -47)"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};
export const HowItWorks = () => {
  return (
    <div>
      <h3>Selling your car made simple</h3>
      <div class="HowItsWork__listWrap">
        <HowItsWork__listItem />
        <div class="HowItsWork__listItem">
          <img
            src="https://d1263yrto77i5b.cloudfront.net/0.2.1205/assets/images/pages/SellCar/components/HowItsWork/assets/hiw-2.png"
            alt="hiw-2.png"
            class="HowItsWork__imgClass Image__animateOpacity"
          />
          <div class="HowItsWork__contentSection">
            <p class="HowItsWork__heading">Free Doorstep Evaluation</p>
            <p class="HowItsWork__details">
              Schedule the evaluation at your convenience, from the comfort of
              your home or workplace
            </p>
            <a class="styles__btn" href="/check-car-valuation/">
              Schedule Evaluation
              <svg
                transform="rotate(0 0 0)"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#6300A3"
                width="9"
                height="9"
                viewBox="0 0 14 8"
              >
                <path
                  fill="none"
                  fill-rule="evenodd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  d="M386 48L392 54 398 48"
                  transform="translate(-385 -47)"
                ></path>
              </svg>{" "}
            </a>
          </div>
        </div>
        <div class="HowItsWork__listItem">
          <img
            src="https://d1263yrto77i5b.cloudfront.net/0.2.1205/assets/images/pages/SellCar/components/HowItsWork/assets/hiw-3.png"
            alt="hiw-3.png"
            class="HowItsWork__imgClass Image__animateOpacity"
          />
          <div class="HowItsWork__contentSection">
            <p class="HowItsWork__heading">Same day payment</p>
            <p class="HowItsWork__details">
              Complete payment and paperwork on-the-spot
            </p>
            <a
              class="styles__btn"
              data-category="how_it_works"
              data-label="Sell Car"
              href="/check-car-valuation/"
            >
              Sell Car{" "}
              <svg
                transform="rotate(0 0 0)"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#6300A3"
                width="9"
                height="9"
                viewBox="0 0 14 8"
              >
                <path
                  fill="none"
                  fill-rule="evenodd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  d="M386 48L392 54 398 48"
                  transform="translate(-385 -47)"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Sell = () => {
  return (
    <>
      <div className="container_sell">
        <div className="background_image_wrapper">
          <h1 class="">Check your car's price in 10 secs </h1>
          <ul class="marketingContent">
            <li class="marketingItem">
              <div class="pointWrap">
                <span>1</span>
              </div>
              Instant Online Quote
            </li>
            <li class="marketingItem">
              <div class="pointWrap">
                <span>2</span>
              </div>
              Free Doorstep Evaluation
            </li>
            <li class="marketingItem">
              <div class="pointWrap">
                <span>3</span>
              </div>
              Same Day Payment
            </li>
          </ul>
          <h2 class="LandingFormDesktop__subHeading">
            Just a few more steps to go
          </h2>
          <div class="filter_form">
            <FormFields name="Year" value="value" />
            <FormFields name="Brand" value="value" />
            <FormFields name="Model" value="value" />
            <FormFields name="Variant" value="value" />
            <FormFields name="KM" value="value" />
            <button class="search-button">Search</button>
          </div>
        </div>
        <HowItWorks />
        <div class="HowItsWork_Button_Container">
          <button class="HowItsWorkVideoButton">
            <span class="btnInnerContent">
              Watch how it works{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                viewBox="0 0 76 76"
              >
                <g transform="translate(-535.437 -1563.437) scale(1.5 1.5)">
                  <path
                    d="M-89.991-5241.6l20.392,13.184-20.392,12Z"
                    transform="translate(464.721 6296.643)"
                    fill="#fff"
                    opacity="1"
                  ></path>
                </g>
              </svg>
            </span>
          </button>
        </div>
        <Feedback />
      </div>
    </>
  );
};

export default Sell;
