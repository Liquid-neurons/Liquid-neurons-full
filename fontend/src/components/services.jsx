import React from "react";
import ai from './AI.png';
import business from './business.png'
import research from './research.png'
import computation from './computation.png'

export const Services = () => {
  // Custom array of services
  const customServices = [
    {
      name: "Custom AI solution development",
      icon: ai, // Replace with the appropriate icon class
    },
    {
      name: "Consulting on AI integration for business processes",
      icon: business, // Replace with the appropriate icon class
    },
    {
      name: "Research and development in industrial AI",
      icon: research, // Replace with the appropriate icon class
    },
    {
      name: "Optimizing AI solutions for low computational overhead",
      icon: computation, // Replace with the appropriate icon class
    },
    // Add more custom services as needed
  ];

  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>We offer a range of custom services, including:</p>
        </div>
        <div className="row">
          {customServices.map((d, i) => (
            <div key={`${d.name}-${i}`} className="col-md-4">
               <img width="30%" src={d.icon} alt={d.title} />
              <div className="service-desc">
                <h3>{d.name}</h3>
                <p>{d.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
