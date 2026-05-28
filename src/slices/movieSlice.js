import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { movieApi } from '../constants/axios'
// import { movieApi'
import { movieRequests } from '../constants/requests'



const initialState = {
    movies: {
        "Top Rated": [],
        "Trending": [],
        "Comedy": [],
        "Horror": [],
        "Documentaries": [],
        "Netflix Originals": []
    },
    status: 'idle',
    error: null
}

export const getMovies = createAsyncThunk('movies/fetchMovies', async () => {
    const response = await movieApi.get(movieRequests.fetchAllMovies)
    return response.data.movies
})

export const postAMovie = createAsyncThunk('movies/postMovie', async (movieData) => {
    const response = await movieApi.post(movieRequests.postMovie, movieData)
    // If the server returns the saved movie, use it; otherwise, default to the input movieData.
    return response.data.movie || movieData
})

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    // reducers: (create) => ({
    //     fetchMovies: create.asyncThunk(
    //         async () => {
    //             const response = await movieApi.get(movieRequests.fetchAllMovies)
    //             return response.data.movies
    //         },
    //         {
    //             pending: (state) => {
    //                 state.status = 'loading'
    //             },
    //             fulfilled: (state, action) => {
    //                 state.status = 'succeeded'
    //                 state.movies = action.payload
    //             },
    //             rejected: (state, action) => {
    //                 state.status = 'failed'
    //                 state.error = action.error.message
    //             }
    //         }

    //     ),
    // postMovie: create.asyncThunk(
        //     async (movieData) => {
        //         const response = await movieApi.post(movieRequests.postMovie, movieData)
        //         return response.data.message
        //     },
        //     {
        //         pending: (state) => {
        //             state.status = 'loading'
        //         },
        //         fulfilled: (state, action) => {
        //             state.status = 'succeeded'
        //             state.movies.push(action.payload)
        //         },
        //         rejected: (state, action) => {
        //             state.status = 'failed'
        //             state.error = action.error.message
        //         }
        //     }
        // )
    // }),
    extraReducers: (builder) => {
        builder.addCase(getMovies.pending, (state) => {
            state.status = 'loading'
            state.error = null
        })
        builder.addCase(getMovies.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.movies = action.payload
        })
        builder.addCase(getMovies.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
        builder.addCase(postAMovie.pending, (state) => {
            state.status = 'loading'
            state.error = null
        })
        builder.addCase(postAMovie.fulfilled, (state, action) => {
            state.status = 'succeeded'
            const movie = action.payload
            const category = movie.type || 'Trending'
            if (state.movies[category]) {
                state.movies[category].push(movie)
            } else {
                state.movies[category] = [movie]
            }
        })
        builder.addCase(postAMovie.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    }

})

export default moviesSlice.reducer

export const selectAllMovies = (state) => state.movies.movies
export const getMoviesStatus = (state) => state.movies.status
export const getMoviesError = (state) => state.movies.error
export const getMoviesData = (state) => state.movies.movies
export const postMovieData = (state) => state.movies.postAMovie
// use it like const postAMovie = () => {
  // whatever you want to send
 /* const data = .........
  
  dispatch(postAMovie(data));
}
*/