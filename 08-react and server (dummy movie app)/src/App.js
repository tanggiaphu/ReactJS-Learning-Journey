import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchMovieData = async () => {
    setIsLoading(true)
    const res = await fetch('https://swapi.dev/api/films')
    const data = await res.json()

    const moviesData = data.results.map((movData) => {
      return {
        id: movData.episode_id,
        title: movData.title,
        openingText: movData.opening_crawl,
        releaseDate: movData.release_date
      }
    })

    setMovies(moviesData)
    setIsLoading(false)
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieData}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && <p>No movie found.</p>}
        {isLoading && <p>Loading data...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
