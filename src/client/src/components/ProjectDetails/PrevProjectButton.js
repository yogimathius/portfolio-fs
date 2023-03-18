import React from 'react';
import { Link } from 'react-router-dom';
import { convertKabab } from '../../helpers/convertKabab';
import arrowLeft from '../../assets/icons/arrow-left.svg';

const PrevProjectButton = ({pageId, onPrevOrNextClicked}) => {

  const title = convertKabab(pageId)

  return (
    <Link to={pageId} onClick={() => onPrevOrNextClicked(pageId)} className="flex items-center w-1/2 border-t-1 border-r-1 border-b-1 border-solid border-light-grey-text text-4xl py-12">
      <div>
        <img src={arrowLeft} alt="arrow left"></img>
      </div>
      <div className="ml-4">
        <h3 className="text-4xl">{title}</h3>
        <p className="text-2xl text-light-grey-text">Previous Project</p>
      </div>
    </Link>
  );
};

export default PrevProjectButton;