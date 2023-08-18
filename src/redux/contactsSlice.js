import { toast } from 'react-hot-toast';
import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    users: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    // ----- fetchContacts -----

    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.users = action.payload;
      state.isLoading = false;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // ----- addContact -----

    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.users.unshift(action.payload);
      toast.success('Create new user successfully');
      state.isLoading = false;
    },
    [addContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // ----- deleteContact -----

    [deleteContact.pending](state) {
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.users = state.users.filter(user => user.id !== action.payload.id);
      toast.error('Delete user successfully');
      state.isLoading = false;
    },
    [deleteContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
