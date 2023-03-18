import React from 'react';

const ProjectPreviews = ({previews}) => {
  if(previews?.length === 1) {
    return (
      <img className="col-start-3 col-span-3" src={previews[0]} alt="project preview"></img>
    )
  }
  const renderedPreviews = previews?.map((preview, index) => {
    return <img src={preview} alt="project preview"></img>
  })
  return (
    <div className="lg:col-start-3 col-span-5 lg:col-span-3">
      <h3 className="text-4xl mb-8 lg:mb-16">Static Previews</h3>
      {renderedPreviews}
    </div>
  );
};

export default ProjectPreviews;