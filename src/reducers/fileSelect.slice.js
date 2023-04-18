import { createSlice } from '@reduxjs/toolkit'

export const fileSelectSlice = createSlice({
  name: 'fileSelect',
  initialState: {
    value: ''
  },
  reducers: {
    setFileSelect: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { setFileSelect } = fileSelectSlice.actions

export default fileSelectSlice.reducer
