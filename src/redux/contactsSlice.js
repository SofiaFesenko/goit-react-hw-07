import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOps";

const initial_state = {
    contacts: {
        items: [],
        loading: false,
        error: null
    }
}

const contactsSlice = createSlice({
    name: "contacts",
    initialState: initial_state,
    extraReducers: (builder) => builder
    .addCase(fetchContacts.pending, (state) => {
        state.loading = true,
        state.error = null 
    })
    .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false,
        state.contacts.items = action.payload
    })
    .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false,
        state.error = action.payload
    })


    .addCase(addContact.pending, (state) => {
        state.loading = true,
        state.error = null 
    })
    .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false,
        state.contacts.items.push(action.payload)
    })
    .addCase(addContact.rejected, (state, action) => {
        state.loading = false,
        state.error = action.payload
    })


    .addCase(deleteContact.pending, (state) => {
        state.loading = true,
        state.error = null 
    })
    .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false,
        state.contacts.items = state.contacts.items.filter(contact => contact.id != action.payload.id)
    })
    .addCase(deleteContact.rejected, (state, action) => {
        state.loading = false,
        state.error = action.payload
    })
})

export default contactsSlice.reducer

export const selectContacts = (state) => state.contacts.contacts.items
export const selectFilter = state => state.filters.filters.name


export const selectFilteredContacts = createSelector(
    [selectContacts, selectFilter],
    (contacts, filtredValue) => {
     return contacts.filter(contact => {
        return contact.name.toLowerCase().includes(filtredValue.toLowerCase())
      })
    }
)