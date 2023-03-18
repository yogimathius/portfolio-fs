import React from 'react';
import SecondaryButton from '../SecondaryButton';

const ProjectSummary = ({title, description, projectUrl}) => {
  return (
    <div className="col-span-5 lg:col-span-2 row-span-2 space-y-16 mr-12">
      <div className="border-b-1 border-solid border-gray-300"></div>

      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="leading-8">{description}</p>
      <div>
        <SecondaryButton target="_blank" link={projectUrl}>Visit Website</SecondaryButton>
      </div>
      <div className="border-b-1 border-solid border-gray-300"></div>

    </div>
  );
};

export default ProjectSummary;