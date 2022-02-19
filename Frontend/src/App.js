import React, {useEffect} from "react";
import About from "./components/About.js";
import Slideshow from "./components/Slideshow.js";
import Contact from "./components/Contact.js";

function App(){
    const loadScript = (src) => {
        return new Promise((resolve) => {
          const script = document.createElement("script");
          script.src = src;
          script.onload = () => {
            resolve(true);
          };
          script.onerror = () => {
            resolve(false);
          };
         document.body.appendChild(script);
       });
    };
    
    useEffect(() => {
        loadScript("https://checkout.razorpay.com/v1/checkout.js");
    });
    
    return(
        <div className="App">
            <section>
                <div className="App__title">
                    <img className="App__img"src="assets/book_1.jpg"></img>
                    <div>
                        <h1>Edu-Tribals</h1>
                        Making a better India!
                    </div>
                </div>
            </section>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Edu-Tribals</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="nav nav-pills" id="resp" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" data-toggle="tab" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#about">AboutUs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#contact">ContactUs</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="tab-content">
                <div id="home" className="navBar tab-pane active">
                    <Slideshow />
                </div>
                <div id="about" className="navBar tab-pane fade">
                    <About/>
                </div>
                <div id="contact" className="navBar tab-pane fade">
                    <Contact />
                </div>
            </div>
            
            <div className="footer">
                <h1>All rights reserved. @Edu-Tribals</h1>
            </div>
        </div>
    )
}
export default App;