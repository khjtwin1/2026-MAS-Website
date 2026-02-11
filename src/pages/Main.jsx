import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";

function Main() {
  return (
    <>
      <Header />
      <Hero />
      <CoreValues />
      <QnA />
      <Footer />
    </>
  );
}

export default Main;
