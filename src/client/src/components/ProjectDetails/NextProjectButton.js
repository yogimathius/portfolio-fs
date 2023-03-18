import React from 'react';
import { Link } from 'react-router-dom';
import { convertKabab } from '../../helpers/convertKabab';
import arrowRight from '../../assets/icons/arrow-right.svg';

const NextProjectButton = ({pageId, onPrevOrNextClicked}) => {
  const title = convertKabab(pageId)
  console.log(title);
  return (
    <Link onClick={() => onPrevOrNextClicked(pageId)} to={pageId} className="flex justify-end items-center w-1/2 text-right border-t-1 border-l-1 border-b-1 border-solid border-light-grey-text  py-12 mr-4">
      <div className="mr-4">
        <h3 className="text-4xl">{title}</h3>
        <p className="text-2xl text-light-grey-text">Next Project</p>
      </div>
      <div>
        <img src={arrowRight} alt="arrow right"></img>
      </div>
    </Link>
  );
};

export default NextProjectButton;