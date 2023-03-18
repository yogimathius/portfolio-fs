const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";
const SET_PROJECT = "SET_PROJECT";
// REDUCER INCLUDES SETTING POINTS
export default function reducer(state, action) {
  switch (action.type) {

    case SET_APPLICATION_DATA:
      const {
        businessData
      } = action;

      
      return {
        ...state,
        businessData
      };

    case SET_PROJECT: {
      const { updatedService } = action;

      const removedState = state.businessData.map((service) => {
        if (service.id === updatedService.serviceId) {
          service.text_body = updatedService.text_body;
          service.title = updatedService.title;
        }
        return service;
      });
        state = { ...state, businessData: removedState };


        return state;
      }

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

export {
  SET_APPLICATION_DATA, SET_PROJECT
};
