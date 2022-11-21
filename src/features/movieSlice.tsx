import { createSlice } from '@reduxjs/toolkit';

export interface InitialState {
  value: Movie[];
}

export interface MovieState {
  cart: {
    value: Movie[];
  };
}

export interface Movie {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

const initialState: InitialState = {
  value: [],
};

export const movieSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action) => {
      const movieIdx = state.value.findIndex(
        (val) => val.imdbID === action.payload.id
      );

      if (movieIdx === -1) {
        state.value = [...state.value, action.payload];
      }
    },
    remove: (state, action) => {
      // remove from cart logic
      state.value = state.value.filter(
        (movie) => movie.imdbID !== action.payload.imdbID
      );
    },
  },
});

export const { add, remove } = movieSlice.actions;

export default movieSlice.reducer;
