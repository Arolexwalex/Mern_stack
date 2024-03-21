import React from "react";
import TwitterLogo from "./images/Twitter Icon.png";
import FacebookLogo from "./images/Facebook Icon.png";
import InstagramLogo from "./images/Instagram Icon.png";
import GitHubLogo from "./images/GitHub Icon.png";
export default function Footer() {
  return (
    <div className="footer">
      <img src={TwitterLogo} alt="Twitter" className="twitter"></img>
      <img src={FacebookLogo} alt="facebook" className="facebook"></img>
      <img src={InstagramLogo} alt="instagram" className="instagram"></img>
      <img src={GitHubLogo} alt="github" className="github"></img>{" "}
    </div>
  );
}
