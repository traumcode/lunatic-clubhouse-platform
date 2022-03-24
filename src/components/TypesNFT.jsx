import React from "react";
import Card from "./Card";
import super1 from "../assets/super1.png";
import release2 from "../assets/release2.png";

export default function TypesNFT() {
  return (
    <div className="types-nft">
      <div className="container">
        <div className="background">
          <div className="ellipse pink"/>
          <div className="ellipse green"/>
        </div>
        <div className="content">
          <div className='content-types'>
            <h2 className="title">Types of NFTs </h2>
          </div>
          <div className='content-projects'>
            <h2 className="title">Other Projects </h2>
          </div>
          <div className=''>
            <h2 className="title">Road Map </h2>
          </div>
        </div>
      </div>
      <div className="cards">
        <div className="card1">
          <Card
            image={super1}
            series="Gloop Series"
            title="Purple Man"
            price={2.99}
            tag={12983}
            time={1}
          />
        </div>
        <div className="card2">
          <Card
            image={release2}
            series="Gloop Series"
            title="Purple Man"
            price={3.95}
            tag="1094"
            time={2}
          />
        </div>
      </div>
    </div>
  );
}
