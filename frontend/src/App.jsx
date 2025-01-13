import { useEffect } from "react";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Product from "./Components/Product";
import AOS from "aos";
import "aos/dist/aos.css";
import Topproduct from "./Components/Topproduct";
import Banner from "./Components/Banner";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <Product />
      <Topproduct />
      <Banner />
    </>
  );
}

export default App;
