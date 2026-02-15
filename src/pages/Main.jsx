import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../pages//Hero";
import CoreValues from "./CoreValues";
import MembersMain from "./MembersMain";
import QnA from "./QnA";
import Footer from "../components/Footer";

function Main() {
  return (
    <>
      <Header />
      <Hero />
      <CoreValues />
      {/* <OurPrize /> */}
      <MembersMain />
      {/* <Projects /> */}
      <QnA />
      <Footer />
    </>
  );
}

export default Main;
