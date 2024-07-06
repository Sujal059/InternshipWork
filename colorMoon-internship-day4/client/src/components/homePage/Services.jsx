import React from "react";
import sample from '/assets/webD.png';

const Services = () => {
  return (
    <div className="serviceMain">
      <div className="serviceDiv1">
        <h1>Our Specialized Services </h1>
        <p>We Render all  your Digital needs</p>
        <div className="seperator">
          <hr />
        </div>
        <div>
          <button className="serviceBtn btn1"> WEB DEVELOPMENT </button>
          <button className="serviceBtn btn2"> MOBILE APPS </button>
          <button className="serviceBtn btn3"> DIGITAL MARKETING </button>
          <button className="serviceBtn btn4"> BRAND IDENTITY </button>
        </div>
      </div>
      <div className="serviceDiv2">
        <div className="serviceSubDiv">
          <img src={sample} alt="" />
          <a href="#"><h1>Web For Start-up</h1></a>
          <p>Kick start your new venture with a stunning website and a great online presence with the best web development company in Vizag. We develop top-notch websites for startups at affordable prices and offer complete support.</p>
          <div style={{backgroundColor:"red"}}><i className="fa fa-arrow-right" style={{color:"white"}}></i></div>
        </div>
      </div>
    </div>
  );
};

export default Services;
