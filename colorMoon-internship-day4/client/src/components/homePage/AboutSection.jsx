import React from 'react';
import "./Homepage.css";

const AboutSection = () => {
  return (
    <>
        <div className="aboutMain1">
            <div className="aboutSub1">
                <h1>About XXXXXXXXXXXXX</h1>
                <p>Efficiency & Effectiveness in every step  of Web Design and App Development</p>
                <div className="seperator">
                    <hr />
                </div>
                <p className="aboutDesc">If you are looking to overshadow your competitors and win the heart of your customers with a great online presence, then you are just where you need to be. Since 2008 providing services like <a href="#">mobile application development</a>, web development, game development, graphics designing and digital marketing, we, at XXXXXXX Technologies can guarantee that, with our services your brand will rule the market within no time.</p>
            </div>
            <div className="aboutSub2">
                <img src="https://img.freepik.com/free-photo/friends-having-fun-restaurant_146671-15437.jpg?t=st=1719925965~exp=1719929565~hmac=a03d8944285016d775ff4fe99b14d8ff47b931402fe483e0fb2b882ec192ac9f&w=1060" alt="" />
            </div>
        </div>
        <div className="aboutMain2">
            <div className="sub1">
                <img src="https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241213.jpg?t=st=1719929728~exp=1719933328~hmac=694b448e8d5f992a4089448b483a6afe436be10d661b7ace774b99842c620342&w=1060" alt="" /> 
            </div>
            <div className="sub2">
                <h1>How We Work</h1>
                <p>Enthusiasm & Energy in every form of work</p>
                <div className="seperator">
                    <hr/>
                </div>
                <p className="aboutDesc">Being one of the top web and app development company in India, we have been successful in working with some of the biggest ventures across the globe. With a team of experts in every domain, we design and develop websites, applications and come up with strategies for digital growth that truly add value to our customers’ companies. We work in coordination with our clients to understand their requirements and plan the execution process once we get their approval. Our customer satisfaction is always our first priority. Our team is available at all times to discuss and improve the work according to our customers’ requirements. </p>
                <div className="iconDiv">
                    <div className="iconMain">
                        <div className="icon">
                            <i className="fa fa-briefcase" style={{fontSize:"30px",color:"white"}}></i>
                        </div>
                        <h4>20XX</h4>
                        <h5>Since</h5>
                    </div>
                    <div className="iconMain">
                        <div className="icon">
                            <i className="fa fa-tachometer"  style={{fontSize:"30px",color:"white"}}></i>
                        </div>
                        <h4>5000+</h4>
                        <h5>Our Projects</h5>
                    </div>
                    <div className="iconMain">
                        <div className="icon">
                            <i className="fa fa-smile-o"  style={{fontSize:"30px",color:"white"}}></i>
                        </div>
                        <h4>2000+</h4>
                        <h5>Cup of Coffee</h5>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default AboutSection