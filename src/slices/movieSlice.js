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
    // }),
    extraReducers: (builder) => {
        builder.addCase(getMovies.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(getMovies.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.movies = action.payload
        })
        builder.addCase(getMovies.rejected, (state, action) => {
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