import { Check } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const pricing = [
    {
      imgUrl: "/pricing.jpg", // Replace with relevant sustainable image
      title: "BASIC",
      price: 5000,
      length: 3,
    },
    {
      imgUrl: "/pricing.jpg", // Replace with relevant sustainable image
      title: "PRO",
      price: 10000,
      length: 6,
    },
    {
      imgUrl: "/pricing.jpg", // Replace with relevant sustainable image
      title: "PREMIUM",
      price: 18000,
      length: 12,
    },
  ];
  return (
    <section className="pricing">
      <h1>EcoEdge Subscription Plans</h1>
      <div className="wrapper">
        {pricing.map((element) => {
          return (
            <div className="card" key={element.title}>
              <img src={element.imgUrl} alt={element.title} />
              <div className="title">
                <h1>{element.title}</h1>
                <h1>PACKAGE</h1>
                <h3>Rs {element.price}</h3>
                <p>For {element.length} Months</p>
              </div>
              <div className="description">
                <p>
                  <Check /> Access to Beginner Sustainability Courses
                </p>
                <p>
                  <Check /> Monthly Webinars with Experts
                </p>
                <p>
                  <Check /> DIY Eco Projects and Resources
                </p>
                <p>
                  <Check /> Community Support and Guidance
                </p>
                <p>
                  <Check /> Certification Options (Premium Only)
                </p>
                <Link to={"/"}>Join Now</Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
