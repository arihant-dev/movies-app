import { configureStore } from '@reduxjs/toolkit'
import moviesSlice from '../slices/movieSlice'

const store = configureStore({
  reducer: {
    movies: moviesSlice
  }
})
export default store
