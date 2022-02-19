import React from 'react';
import { Slide } from 'react-slideshow-image';
import "react-slideshow-image/dist/styles.css";
import displayRazorpay from "../utils/Razorpay.js";

const slideImages = [
  'assets/slide_img1.jpg',
  'assets/slide_img2.jpg',
  'assets/slide_img3.jpg',
  'assets/slide_img4.jpg',
  'assets/slide_img5.jpg'
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  autoplay: true
}

const Slideshow = () => {
    return (
      <Slide {...properties}>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            <h1 style={{"color":"white","margin-top":"60px"}}>A step towards making a better educated India!</h1>
            <a href="https://rzp.io/l/Ve5ElZ6i" style={{"position":"fixed"}}>
            <button type="button" className="donate-button">
                Donate Now
            </button>
            </a>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            <h1 style={{"margin-top":"35px"}}>Live Together.   Learn Together!</h1>
            <a href="https://rzp.io/l/Ve5ElZ6i" style={{"position":"fixed"}}>
            <button className="donate-button">
                Donate Now
            </button>
            </a>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            <h1  style={{"color":"white","margin-top":"35px"}}>Help them create a future of their choice!</h1>
            <a href="https://rzp.io/l/Ve5ElZ6i" style={{"position":"fixed"}}>
            <button className="donate-button">
                Donate Now
            </button>
            </a>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
            <h1 style={{"color":"white","margin-top":"35px"}}>Be the gamechanger!</h1>
            <a href="https://rzp.io/l/Ve5ElZ6i" style={{"position":"fixed"}}>
            <button className="donate-button">
                Donate Now
            </button>
            </a>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[4]})`}}>
            <h1 style={{"color":"white","margin-top":"35px"}}>Make them feel one amongst us!</h1>
            <a href="https://rzp.io/l/Ve5ElZ6i" style={{"position":"fixed"}}>
            <button className="donate-button">
                Donate Now
            </button>
            </a>
          </div>
        </div>
      </Slide>
    )
}

export default Slideshow;