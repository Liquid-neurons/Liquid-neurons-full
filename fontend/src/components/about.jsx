import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <p>We are Industrial Artificial Intelligence (AI) consulting and research organization which is involved in providing AI based solution to Industries as per their business need. We are new startup in this domain whose aim is to provide high precision, robust, low computational overhead and price effective solution to all those industries who are keen in accelerating their business growth by unleashing the power of AI.</p>
              <h3>Current research work :</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <h5>Educational Institution:</h5>
                  <ul>
                   <li>Crowded bahaviour analysis in classroom using computer vision.</li>
                   <li>School student and staff attendance monitoring using computer vision.</li>
                   </ul>
                   <h5>Service Indsutry:</h5>
                  <ul>
                  <li>Early warning system critical application crash at desktop level for mass user.</li>
                   <li>Battery swapping station optimization, battery inventory maximization and battery recharge lifecycle maximization.</li>   
                  </ul>
                  
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <h5>Manufacturing industry:</h5>
                  <ul>
                  <li>Mass attendance system in factory environment using computer vision.</li>
                   <li>Material monitoring and safety in given industrial area using computer vision.</li>
                   <li>Welding and casting defect reduction using AI.</li>
                  </ul>
                  <h5>Research Institute:</h5>
                  <ul>
                  <li>Biological cell phase recognition using computer vision.</li>
                  </ul>
                  <h5>Banking and Financial Institution:</h5>
                  <ul>
                  <li>Risk assessment of MSME loan application</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
