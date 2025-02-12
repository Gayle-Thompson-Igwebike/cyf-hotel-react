import React, { useState } from "react";
import Heading from "./Heading";
import Bookings from "./Bookings";
import TouristInfoCards from "./TouristInfoCards";
// import SearchResults from "./SearchResults";
import Footer from "./Footer";
import LondonImage from "./images-folder/london-skyline.jpeg";
import ManchesterImage from "./images-folder/manchester-ski.jpeg";
import GlasgowImage from "./images-folder/glasgow-skyline.jpeg";
import Restaurant from "./Restaurant";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <section className="info-image">
        <div className="infocards">
          <TouristInfoCards
            image={LondonImage}
            name="London"
            link="https://www.visitlondon.com/"
            description="The south-West bubbly 'Capital City' of England. Vibrant and diverse, London is a hotpot of melting cultures and personalities, with a rich cool vibe."
          />

          <TouristInfoCards
            image={GlasgowImage}
            name="Glasgow"
            link="http://peoplemakeglasgow.com/"
            description="Capital city of Scotland, rich in history and culture. A vibrant city with a colourful atmosphere. Visit the cathedral for an authenthic Glasgow feeling."
          />
          <TouristInfoCards
            image={ManchesterImage}
            name="Manchester"
            link="https://www.visitmanchester.com/"
            description="A beautiful bubbly city in the north part of England. It is rich in both traditional and futuristic cultures, with a medley of its old history seeping through."
          />
        </div>
      </section>
      <Bookings />
      <Restaurant />
      <Footer />
    </div>
  );
};

export default App;
