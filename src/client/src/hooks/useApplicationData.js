import { useEffect, useReducer } from "react";
import axios from 'axios'
import reducer, { SET_APPLICATION_DATA, SET_PROJECT } from '../reducers/application'

export default function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, {
    businessData: []
  });

  // RETRIEVES API AND SETS IT WITH REDUCER
  useEffect(() => {
      axios.get("/api/projects").then((res) => {
        const businessData = res.data;
      dispatch({
        type: SET_APPLICATION_DATA,
        businessData,
      });
    });
  }, []);

  function createProject(projectId, updatedProject) {
    const url = `/api/projects`;
    const promise = axios.put(url, { updatedProject }).then(() => {
      dispatch({
        type: SET_PROJECT,
        id: projectId,
        updatedProject
      });
    })
    return promise;
  }
  
  const deleteProject = (appointmentId, interview) => {
    const url = `/api/projects`;
    const promise = axios.delete(url).then((res) => {
      dispatch({
        type: SET_PROJECT,
        id: appointmentId,
        interview: null,
        days: state.days,
      });
    });
    return promise;
  };

  return {
    state, createProject, deleteProject
  };
}