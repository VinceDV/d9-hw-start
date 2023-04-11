export const AddToCart = (job) => {
    return {
        type: "ADD_TO_CART",
        payload: job
    }
}

export const removeFromCart = (index) => {
    return {
        type: "REMOVE_FROM_CART",
        payload: index
    }
}
const baseEndpoint = 'https://strive-benchmark.herokuapp.com/api/jobs?search='

export const fetchJobs = (query) => {
    return async(dispatch, getState) => {
        try {
            const response = await fetch(baseEndpoint + query + '&limit=20')
            if (response.ok) {
              const { data } = await response.json()
              dispatch({
                type: "SET_JOBS",
                payload: data
              })
            } else {
              alert('Error fetching results')
            }
          } catch (error) {
            console.log(error)
          }
    }
}