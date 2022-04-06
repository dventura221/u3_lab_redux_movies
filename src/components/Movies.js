import { useEffect } from 'react'
import { connect } from 'react-redux'
//import { Link } from 'react-router-dom'
import { LoadMovies } from '../store/actions/MovActions'

const mapStateToProps = ({ movieState }) => {
  return { movieState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: () => dispatch(LoadMovies())
  }
}

const Movies = (props) => {
  useEffect(() => {
    props.fetchMovies()
  }, [])

  console.log(props.movieState, 'Movie State')

  return (
    <div>
      Movies
      {props.movieState.movies.results.map((movie) => (
        <ul key={movie.id}>
          <h4>{movie.title}</h4>
        </ul>
      ))}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies)
