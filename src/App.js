import React from "react";
import "bulma/css/bulma.css";
import "./App.css";

import BillBoard from "./components/BillBoard";
import EnForm from "./components/EnForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Intro from "./components/Intro";
import PlasticCommunity from "./components/PlasticCommunity";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div className="App">
      <Header />

      <EnForm />

      <Intro />

      <PlasticCommunity />
      <BillBoard />

      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
