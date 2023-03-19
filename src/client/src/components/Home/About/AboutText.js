import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {

  return (

    <div className="col-start-2 h-full md:w-4/6 mx-auto md:mt-0 flex flex-col justify-between space-y-10">
      <div className="border-b-1 border-solid border-gray-300"></div>
      <h1 className="text-3xl md:text-5xl font-header text-maximum-blue-green uppercase mb-4  text-center md:text-left">About Me</h1>
      <div className="space-y-6 text-lg md:text-2xl">
        <p> 
        I’m a full-stack developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React and Express, but I can adapt to whatever tools are required. I’m based in Squamish, BC, but I’m happy working remotely and have experience in remote teams. When I’m not coding, you’ll find me outdoors. I love being out in nature whether that’s going for a walk, run or cycling. I’d love for you to check out my work.
        </p>
      </div>
      <div className="flex justify-center md:justify-start">
        <Link to="/portfolio" type="button" className="btn btn-secondary">Go To Portfolio</Link>
      </div>
      <div className="border-b-1 border-solid border-gray-300"></div>
    </div>
  );
};

export default About;