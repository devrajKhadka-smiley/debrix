import React from "react";
import Lanyard from "../components/Lanyard"; // adjust if needed

const About = () => {
  return (
    <div>
      <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
    </div>
  );
};

export default About;
