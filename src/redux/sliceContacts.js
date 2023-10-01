import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
export const sliceContacts = createSlice({
  name: 'contacts',
  initialState: { list: [] },
  reducers: {
    addContacts: {
      reducer(state, action) {
        state.list.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContacts(state, action) {
      state.list = state.list.filter(item => item.id !== action.payload);
    },
  },
});
const persistConfig = {
  key: 'root',
  storage,
};
export const contactsReducer = persistReducer(
  persistConfig,
  sliceContacts.reducer
);
export const { addContacts, deleteContacts } = sliceContacts.actions;
export const selectorContacts = state => state.contacts;
