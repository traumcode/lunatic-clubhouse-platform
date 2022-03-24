import React from "react";
import clients1 from "../assets/clients1.png";
import clients2 from "../assets/clients2.png";
import clients3 from "../assets/clients3.png";
import clients4 from "../assets/clients4.png";
import clients5 from "../assets/clients5.png";

export default function Team() {
  const data = [clients1, clients2, clients3, clients4, clients5];
  return (
    <div className="team">
      <div className="container">
          <h2 style={{color: 'white'}}>TEAM FORCE</h2>
        <div className="clients-container">
          {data.map((client, index) => (
            <div className="client" key={index}>
              <img src={client} alt="client" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}