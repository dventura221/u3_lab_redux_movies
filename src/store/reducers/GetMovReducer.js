const { GET_MOVIES, MOVIES_LOADING_TYPE } = require('../types')

const initialState = {
  movies: [],
  moviesLoading: ''
}

const GetMovReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVIES_LOADING_TYPE:
      return { ...state, moviesLoading: action.payload }
    case GET_MOVIES:
      return { ...state, movies: action.payload }
    default:
      return { ...state }
  }
}

export default GetMovReducer
