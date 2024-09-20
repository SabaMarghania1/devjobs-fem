import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "",
  location: "",
  fullTime: false,
  isSearching: false,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    setFilterByLocation(state, action) {
      state.location = action.payload;
    },
    setFullTime(state, action) {
      state.fullTime = action.payload;
    },
    setIsSearching(state, action) {
      state.isSearching = action.payload;
    },
  },
});

export const {
  setSearchTerm,
  setFilterByLocation,
  setFullTime,
  setIsSearching,
} = filterSlice.actions;

export default filterSlice.reducer;
