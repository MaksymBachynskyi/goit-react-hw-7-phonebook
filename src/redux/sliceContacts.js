import { createSlice } from '@reduxjs/toolkit';

import { fetchContacts } from './operation';

const sliceContacts = createSlice({
  name: 'contacts',
  initialState: { list: [], isLoading: false, eror: null },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.list = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export default sliceContacts.reducer;
