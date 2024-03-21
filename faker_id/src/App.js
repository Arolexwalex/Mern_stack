import React from "react";
import About from "./About";
import Footer from "./Footer";
import Info from "./Info";
import Interest from "./Interest";

export default function App() {
  return (
    <div className="container">
      <Info />
      <About />
      <Interest />
      <Footer />
    </div>
  );
}
