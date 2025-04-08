import React from "react";
// Assume these variables are defined in your data/user file:
import { name, city } from "../data/user";

function Home() {
  return (
    <div id="home">
      <h1 style={{ color: "firebrick" }}>
        {name} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;
