import React from "react";
import { Link } from "react-router";
import Hero from "../../components/Hero/Hero";
import wave from "../../assets/wave.svg";

const Home = () => {
  return (
    <div className="flex flex-col relative justify-center items-center min-h-[calc(100vh-132px)]">
      <Hero></Hero>
      <img className="absolute bottom-0 w-full" src={wave} alt="" />
    </div>
  );
};

export default Home;
