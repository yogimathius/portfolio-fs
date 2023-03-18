import React from 'react';
import { Link } from 'react-router-dom';

const ServiceList = ({titles}) => {
  const renderedTitles = titles.map((title, index) => {
    return (
      <Link key={index} to="/offerings">
        <li className="text-maximum-blue-green cursor-pointer hover:text-black">{title}
        </li>  
      </Link>
    )
    });
  return (
    <ul className="flex flex-col space-y-1 md:space-y-2 text-center text-lg md:text-3xl font-semibold">
    {renderedTitles}
  </ul>
  );
};

export default ServiceList;