import React from 'react';
import { loadState, saveState } from '../../helpers/localStorage';
import SecondaryButton from '../SecondaryButton';

const PortfolioListItem = ({project}) => {
  const projectImage = project.image_url;
  // const projectUrl = project.project_url;
  const title = project.title;
  const description = project.text_body;
  const pageId = project.page_id;
  const id = project.id;
  const imageColumn = id % 2 === 0 ? "2" : "1"
  const textColumn = id % 2 === 0 ? "1" : "2"
  const projectKeys = loadState()
  const stateObj = {
    pageId, 
    projectKeys
  }
  
  return (
    <div className="md:grid md:grid-cols-2 my-12">
      <div className={`row-start-1 col-start-${imageColumn} flex justify-center items-center`}>
        <img className="" src={projectImage} alt={title}></img>
      </div>
      <div className={`row-start-1 col-start-${textColumn} flex flex-col justify-between mx-12`}>
        <div className="border-b-1 border-solid border-gray-300"></div>
        <div className="flex flex-col space-y-12 my-12 xl:my-0">
          <h2 className="text-4xl font-bold">{title}</h2>
          <p>{description}</p>
          <SecondaryButton onClick={() => saveState(stateObj)} target="_self" link={`/project/${pageId}`}>View Project</SecondaryButton>
        </div>
        <div className="border-b-1 border-solid border-gray-300"></div>
      </div>
    </div>
  );
};

export default PortfolioListItem;