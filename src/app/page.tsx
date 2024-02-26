import Footer from "@/components/Footer";
import LandingPage1 from "@/components/LandingPage1";
import LandingPage2 from "@/components/LandingPage2";
import LandingPage3 from "@/components/LandingPage3";
import Navbar from "@/components/Navbar";
import React, { FC } from "react";

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
  return (
    <div>
      <Navbar />
      <LandingPage1 />
      <LandingPage2 />
      <LandingPage3 />
      <Footer />
    </div>
  );
};

export default Home;
