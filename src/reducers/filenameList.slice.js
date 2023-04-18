import { createSlice } from '@reduxjs/toolkit'

export const filenameListSlice = createSlice({
  name: 'filenameList',
  initialState: {
    value: []
  },
  reducers: {
    setFilenameList: (state, action) => {
      state.value = action.payload.files
    }
  }
})

export const { setFilenameList } = filenameListSlice.actions

export default filenameListSlice.reducer
