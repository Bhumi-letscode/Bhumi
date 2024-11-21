import React, { useState } from "react";
import { toast } from "react-toastify";

const CarbonFootprintCalculator = () => {
  const [transport, setTransport] = useState("");
  const [diet, setDiet] = useState("");
  const [energyUsage, setEnergyUsage] = useState("");
  const [footprint, setFootprint] = useState("");

  const calculateFootprint = (e) => {
    e.preventDefault();

    if (!transport || !diet || !energyUsage) {
      toast.error("Please complete all fields to calculate your footprint.");
      return;
    }

    // Example calculation (adjust with real data for accuracy)
    const transportImpact = transport === "Car" ? 4.6 : transport === "Public" ? 1.2 : 0.5;
    const dietImpact = diet === "Meat-based" ? 2.5 : diet === "Vegetarian" ? 1.7 : 1.0;
    const energyImpact = energyUsage === "High" ? 3.0 : energyUsage === "Moderate" ? 2.0 : 1.0;

    const totalFootprint = (transportImpact + dietImpact + energyImpact).toFixed(2);
    setFootprint(totalFootprint);

    if (totalFootprint < 3) {
      toast.success("Your carbon footprint is low! Keep up the sustainable lifestyle.");
    } else if (totalFootprint >= 3 && totalFootprint <= 6) {
      toast.warning(
        "Your carbon footprint is moderate. Consider small changes to reduce your impact."
      );
    } else {
      toast.error(
        "Your carbon footprint is high! Explore significant lifestyle changes to help the environment."
      );
    }
  };

  return (
    <section className="bmi">
      <h1>Carbon Footprint Calculator</h1>
      <div className="container">
        <div className="wrapper">
          <form onSubmit={calculateFootprint}>
            <div>
              <label>Primary Transportation</label>
              <select
                value={transport}
                onChange={(e) => setTransport(e.target.value)}
                required
              >
                <option value="">Select</option>
                <option value="Car">Car</option>
                <option value="Public">Public Transport</option>
                <option value="Bike/Walk">Bike/Walk</option>
              </select>
            </div>
            <div>
              <label>Diet Type</label>
              <select
                value={diet}
                onChange={(e) => setDiet(e.target.value)}
                required
              >
                <option value="">Select</option>
                <option value="Meat-based">Meat-based</option>
                <option value="Vegetarian">Vegetarian</option>
                <option value="Vegan">Vegan</option>
              </select>
            </div>
            <div>
              <label>Energy Usage (Household)</label>
              <select
                value={energyUsage}
                onChange={(e) => setEnergyUsage(e.target.value)}
                required
              >
                <option value="">Select</option>
                <option value="High">High</option>
                <option value="Moderate">Moderate</option>
                <option value="Low">Low</option>
              </select>
            </div>
            <button type="submit">Calculate Footprint</button>
          </form>
        </div>
        <div className="wrapper">
          <img src="/bmi.jpg" alt="Carbon Footprint" />
        </div>
      </div>
      {footprint && (
        <div className="wrapper">
          <h2>Your Carbon Footprint: {footprint} tons/year</h2>
        </div>
      )}
    </section>
  );
};

export default CarbonFootprintCalculator;
