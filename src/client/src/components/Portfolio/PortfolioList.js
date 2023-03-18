import React from 'react';
import { saveState } from '../../helpers/localStorage';
import LoadingScreen from '../LoadingScreen';
import PortfolioListItem from './PortfolioListItem';
import projectsContext from '../../App';
import CallToAction from '../CallToAction';

const PortfolioList = () => {
  const projectsStore = projectsContext()
  const projects = projectsStore.props.value;
  // const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 1000)
  // }, [])

  // const { state } = useApplicationData();
  // const projects = state.businessData;

  const projectKeys = Object.keys(projects)
  const renderedProjects = projectKeys.map((projectKey, index) => {
    const project = projects[projectKey]
    return <PortfolioListItem key={index} project={project} />
  })
  
  saveState(projectKeys)
  return (
    
    <div>
    {renderedProjects.length > 0 ? (
      <div>
        {renderedProjects}
        <CallToAction />
      </div>
      ) : 
        <LoadingScreen />
      }
    </div>
  );
};

export default PortfolioList;