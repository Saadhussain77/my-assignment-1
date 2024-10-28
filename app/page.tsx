import Navbar from "./Components/Navbar/navbar";
import Link from "next/link";
import image from "next/image"
import Footer from "./Components/Footer/footer"
import Hero from "./Components/Hero/hero";

export default function Home() {
  return(
    <div>

      <Navbar/>
      
        <Hero></Hero>
       <Footer></Footer>


    </div>
  );
};