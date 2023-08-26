import { toast } from 'react-hot-toast';
import { createSlice } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  fetchContacts,
  updateContact,
} from './operations';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    users: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder

      // ----- fetchContacts -----

      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.users = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // ----- addContact -----

      .addCase(addContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.users.unshift(action.payload);
        toast.success('Create new user successfully');
        state.isLoading = false;
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // ----- deleteContact -----

      .addCase(deleteContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.users = state.users.filter(user => user.id !== action.payload.id);
        toast.error('Delete user successfully');
        state.isLoading = false;
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // ----- updateContact -----

      .addCase(updateContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        const updatedUserIndex = state.users.findIndex(
          user => user.id === action.payload.id
        );
        if (updatedUserIndex !== -1) {
          state.users[updatedUserIndex] = action.payload.updatedData;
        }
        toast.success('Update user successfully');
        state.isLoading = false;
      })
      .addCase(updateContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
