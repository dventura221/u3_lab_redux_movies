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
      <h1>Movies</h1>
      <div className="movieGrid">
        {props.movieState.movies.results.map((movie) => (
          <ul key={movie.id} className="movieCard">
            <h4>{movie.title}</h4>
            <h5>Release Date: {movie.release_date}</h5>
            <h5>Score {movie.vote_average}/10</h5>
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt="poster"
            />
            <p>Overview: {movie.overview}</p>
          </ul>
        ))}
      </div>
    </div>
  )
}
//refreshing the app with this map function will break the app somehow, have to comment out/in to get back to work

export default connect(mapStateToProps, mapDispatchToProps)(Movies)
