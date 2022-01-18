import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'store',
  initialState: {
    token: null,
    isAuthenticated: false,
  },
  reducers: {
    storeJwt: (state, action) => {
      state.token = action.payload
    },
    isAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload
    },
    signOut: (state) => {
      state.token = null
      state.isAuthenticated = false
    },
  },
})

export const { storeJwt, signOut, isAuthenticated } = slice.actions
export default slice.reducer
