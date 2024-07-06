import React from 'react'
import "./Homepage.css"

const MultiIndustrySection = () => {
  return (
    <>
            <div className="mutliIndusHeading">
                <h1>We Serve Multiple Industries, Globally</h1>
                <p>We assist our customers in any phase of software development</p>
            </div>
            <div className="seperator">
                <hr />
            </div>
            <div className="mutliIndusIcon">
                <div style={{border: "1px solid rgb(3, 183, 3)"}}>
                    <i className="fa fa-building-o" style={{color: "rgb(3, 183, 3)",fontSize: "70px"}}></i>
                    <p style={{color: "rgb(3, 183, 3)"}}>Retail</p>
                </div>
                <div style={{border: "1px solid rgb(255, 59, 45)"}}>
                    <i className="fa fa-balance-scale" style={{color: "rgb(255, 59, 45)",fontSize: "70px"}}></i>
                    <p style={{color: "rgb(255, 59, 45)"}}>Legal&Finance</p>
                </div>
                <div style={{border: "1px solid rgb(0, 157, 255)"}}>
                    <i className=" fa fa-handshake-o" style={{color: "rgb(0, 157, 255)",fontSize: "70px"}}></i>
                    <p style={{color:"rgb(0, 157, 255)"}}>Hospitality</p>
                </div>
                <div style={{border: "1px solid rgb(228, 217, 2)"}}>
                    <i className="fa fa-hospital-o" style={{color:"rgb(228, 217, 2)",fontSize: "70px"}}></i>
                    <p style={{color:"rgb(228, 217, 2)"}}>Health Care</p>
                </div>
                <div style={{border: "1px solid rgb(254, 175, 28)"}}>
                    <i className="fa fa-automobile" style={{color: "rgb(192, 126, 4)",fontSize: "70px"}}></i>
                    <p style={{color:"rgb(254, 175, 28)"}}>Automotive</p>
                </div>
                <div style={{border: "1px solid rgb(172, 2, 172)"}}>
                    <i className="fa fa-home" style={{color: "rgb(172, 2, 172)",fontSize: "70px"}}></i>
                    <p style={{color:"rgb(172, 2, 172)"}}>Realestate</p>
                </div>
                <div style={{border: "1px solid rgb(3, 156, 74)"}}>
                    <i className="fa fa-book" style={{color: "rgb(3, 156, 74)",fontSize: "70px"}}></i>
                    <p style={{color:"rgb(3, 156, 74)"}}>Education</p>
                </div>
                <div style={{border: "1px solid rgb(3, 183, 3)"}}>
                    <i className="fa fa-video-camera" style={{color: "rgb(3, 183, 3)",fontSize: "70px"}}></i>
                    <p style={{color:"rgb(3, 183, 3)"}}>Media&Entertainment</p>
                </div>
                <div style={{border: "1px solid rgb(255, 59, 45)"}}>
                    <i className="fa fa-truck" style={{color: "rgb(255, 59, 45)",fontSize: "70px"}}></i>
                    <p style={{color:"rgb(255, 59, 45)"}}>Transport & Logistics</p>
                </div>
                <div style={{border: "1px solid rgb(0, 157, 255)"}}>
                    <i className="fa fa-plane" style={{color: "rgb(0, 157, 255)",fontSize: "70px"}}></i>
                    <p style={{color: "rgb(0, 157, 255)"}}>Travel & tourism</p>
                </div>
                <div style={{border: "1px solid rgb(228, 217, 2)"}}>
                    <i className="fa fa-globe" style={{color: "rgb(228, 217, 2)",fontSize: "70px"}}></i>
                    <p style={{color: "rgb(228, 217, 2)"}}>Telecom & Technology</p>
                </div>
                <div style={{border: "1px solid  rgb(254, 175, 28)"}}>
                    <i className="fa fa-gamepad" style={{color: "rgb(254, 175, 28)",fontSize: "70px"}}></i>
                    <p style={{color: "rgb(254, 175, 28)"}}>Games</p>
                </div>
            </div>
            
    </>
  )
}

export default MultiIndustrySection