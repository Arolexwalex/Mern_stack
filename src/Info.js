import React from "react";
import OlawalePics from "./images/olawale_pics (2).jpg";
import Mail from "./images/Mail.png";
import Linkedin from "./images/linkedin.png";

export default function Info() {
  return (
    <div>
      <img src={OlawalePics} alt="olawale" className="my-pic"></img>
      <h3 className="my-name">Olawale Arowojolu</h3>
      <h4 className="frontend-dev">Frontend Developer</h4>
      <h5 className="website-name">olawaleArowojolu.website</h5>
      <button className="email-button">
        <img src={Mail} alt="mail" className="mail-icon"></img>Email
      </button>
      <button className="linkedin-button">
        <img src={Linkedin} alt="linkedin" className="linkedin-icon"></img>
        Linkedln
      </button>
    </div>
  );
}
