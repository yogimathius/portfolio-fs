import React from "react";
import CallToAction from "../CallToAction.js";
import About from "./About/index.js";
import Hero from "./Hero";
import LazyLoad from 'react-lazyload';

function Home(businessData) {
  return (
    <div>
      <div className="">
        <Hero />
        <LazyLoad height={200}>
          <About />
        </LazyLoad>

        <LazyLoad height={200}>
          <CallToAction />
        </LazyLoad>
      </div>
    </div>
  );
}

export default Home;  