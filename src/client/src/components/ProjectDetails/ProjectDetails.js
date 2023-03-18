import React, { useEffect, useState } from 'react';
import ProjectImage from './ProjectImage';
import ProjectSummary from './ProjectSummary';
import ProjectBackground from './ProjectBackground';
import ProjectPreviews from './ProjectPreviews';
import { loadState } from '../../helpers/localStorage';
import PrevProjectButton from './PrevProjectButton';
import NextProjectButton from './NextProjectButton';
import projectsContext from '../../App'
import LoadingScreen from '../LoadingScreen';

const ProjectDetails = () => {
  const projectObj = loadState()
  const [currentProject, setProject] = useState([]);
  const [currentPageId, setPageId] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  
  const projectsStore = projectsContext()
  const projects = projectsStore.props.value;
  const pageId = projectObj.pageId;
  useEffect(() => {
    setPageId(pageId)
  }, [pageId])
  
  const onPrevOrNextClicked = (pageIdRequested) => {
    setPageId(pageIdRequested)
  }
  
  useEffect(() => {
    const projectRequested = projects[currentPageId]
      setProject(projectRequested);
  }, [currentPageId, projects])


  if (!currentProject) { return null}
  const projectImage = currentProject.image_url;
  const projectUrl = currentProject.project_url;
  const title = currentProject.title;
  const description = currentProject.text_body;
  const background = currentProject.text_body_background;
  const previews = currentProject.previewimages;
  const projectKeys = projectObj.projectKeys

  let prevProject = projectKeys[projectKeys.indexOf(currentPageId)- 1] ? projectKeys[projectKeys.indexOf(currentPageId)- 1] : projectKeys[projectKeys.length- 1]
  let nextProject = projectKeys[projectKeys.indexOf(currentPageId) + 1] ? projectKeys[projectKeys.indexOf(currentPageId) + 1] : projectKeys[0]

  return (
    <div className="mx-4 md:mx-0">
      {loading === false ? (
      <div>
        <ProjectImage projectImage={projectImage} title={title} />
        <div className="md:grid grid-cols-5">
          <ProjectSummary title={title} description={description} projectUrl={projectUrl} />
          <ProjectBackground background={background} />
          <ProjectPreviews previews={previews} />
        </div>
        <div className="flex mt-12">
          <PrevProjectButton onPrevOrNextClicked={onPrevOrNextClicked} pageId={prevProject} />
          <NextProjectButton onPrevOrNextClicked={onPrevOrNextClicked} pageId={nextProject} />
        </div>
      </div>
      ) :
      <LoadingScreen />
      }
    </div>
  );
};

export default ProjectDetails;