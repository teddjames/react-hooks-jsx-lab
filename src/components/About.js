import React from "react";
// Assume this variable is defined in your data/user file:
import { image } from "../data/user";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>This is a paragraph about me. I love coding and building web applications.</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
