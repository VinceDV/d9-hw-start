const initialState = {
    joblist:{
      list:[],
    }
  }

  
const joblistReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_JOBS_LIST':
        return {
          ...state,
          joblist: {
            list:action.payload ,
          },
        }
      default:
        return state
    }
  }
  
  export default joblistReducer