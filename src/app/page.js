import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhatWeDo from "./components/WhatWeDo";
import Services from "./components/Services";
import Products from "./components/Products";
import Customers from "./components/Customer";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhatWeDo/>
      <Services/>
      <Products/>
      <Customers/>
      <Footer/>
    </>
  );
}
