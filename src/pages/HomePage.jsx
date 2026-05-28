import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Row from '../components/Row'
import SkeletonCard from '../components/SkeletonCard'
import { useDispatch, useSelector } from 'react-redux'
import { getMovies, getMoviesData, getMoviesStatus, postAMovie } from '../slices/movieSlice'

const HomePage = () => {
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingBanner, setLoadingBanner] = useState(true);

  const dispatch = useDispatch()
  const status = useSelector(getMoviesStatus)
  const movies = useSelector(getMoviesData)


  useEffect(() => {
    setLoadingCategories(true);
    setLoadingBanner(true);
    const timer = setTimeout(() => {
      setLoadingCategories(false);
      setLoadingBanner(false);
    }, 450);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getMovies())
    }
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const movieData = Object.fromEntries(formData.entries());
    dispatch(postAMovie(movieData));
  }

  return (
    <div className='page' style={{backgroundColor: "var(--bg-color)", overflow: "hidden"}}>
      <Navbar />
      {loadingBanner ? (
        <SkeletonCard />
      ) : (
        <Banner />
      )}
      
      <form onSubmit={handleSubmit} className="add-movie-form">
        <input type="text" name="title" placeholder="Title" required />
        <input type="text" name="author" placeholder="Author" required />
        <input type="date" name="release_date" placeholder="Release Date" required />
        <input type="text" name="type" placeholder="Type" required />
        <input type="text" name="poster" placeholder="Poster URL" required />
        <input type="text" name="backdrop_poster" placeholder="Backdrop Poster URL" required />
        <textarea name="overview" placeholder="Overview" required></textarea>
        <button type="submit">
          Add Movie
        </button>
      </form>

      {loadingCategories ? (
        <SkeletonCard />
      ) : (
        Object.keys(movies).map((category) => (
          <Row key={category} title={category} movies={movies[category]}/>
        ))
      )}
    </div>
  )
}

export default HomePage

/*  const { title, release_date, author } = req.body;
   const { type, poster, backdrop_poster, overview } = req.body; */