import { GetMovies } from '../../services/MovieService'
import { GET_MOVIES } from '../types'

export const LoadMovies = () => {
  return async (dispatch) => {
    try {
      const movies = await GetMovies()
      console.log('Get Movies', movies)
      dispatch({
        type: GET_MOVIES,
        payload: movies.results
      })
    } catch (error) {
      throw error
    }
  }
}
