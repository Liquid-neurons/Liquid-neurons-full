import React from "react";
import automation from './automation.png';
import supply from './supply.png'
import data from './data.png'
import customer from './customer.png'

export const Features = () => {
  // Custom array of features
  const customFeatures = [
    {
      title: "Automation and efficiency",
      text: "AI enables automation of repetetive tasks reducing manual efforts, streamlining workflows and increasing efficiency.",
      icon: automation, // Replace with the appropriate icon class
    },
    {
      title: "Supply chain optimization",
      text: "AI helps in optimizing supply chain processes by predicting demand, managing inventory efficiently, and improving logistics and transportation.",
      icon: supply, // Replace with the appropriate icon class
    },
    {
      title: "Data analytics and insights",
      text: "AI tools analyze vast amounts of data quickly, extracting valuable insights for strategic decision making.",
      icon: data, // Replace with the appropriate icon class
    },
    {
      title: "Customer Experience",
      text: "AI-driven personalization enhances customer experiences by tailoring products and services based on individual preferences and behaviours.",
      icon: customer, // Replace with the appropriate icon class
    },
    // Add more custom features as neededu
  ];

  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>How AI is helping industrial growth journey</h2>
          <br></br>
          <h5>AI (Artificial Intelligence) is playing a significant role in helping industries grow faster by offering innovative solutions, improving efficiency, and enabling better decision making. Here are several ways in which AI contributes to the growth of various industries.</h5>
        </div>
        <div className="row">
          {customFeatures.map((d, i) => (
            <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
              <img width="30%" src={d.icon} alt={d.title} />
              <h3>{d.title}</h3>
              <p>{d.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
