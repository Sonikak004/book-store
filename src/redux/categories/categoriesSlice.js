import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    // Reducer that always returns "Under construction"
    setStatus: (state) => {
      state.categories.push('Under construction');
    },
  },
});

export const { setStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
