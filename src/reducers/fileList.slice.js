import { createSlice } from '@reduxjs/toolkit'

export const fileListSlice = createSlice({
  name: 'fileList',
  initialState: {
    value: []
  },
  reducers: {
    setFileList: (state, action) => {
      const fileListFormatted = []

      action.payload.forEach(item => {
        const fileName = item.file

        item.lines.forEach(line => {
          fileListFormatted.push([fileName, line.text, line.number, line.hex])
        })
      })

      state.value = fileListFormatted
    }
  }
})

export const { setFileList } = fileListSlice.actions

export default fileListSlice.reducer
