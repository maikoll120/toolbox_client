import { configureStore } from '@reduxjs/toolkit'
import fileListReducer from './fileList.slice'

export default configureStore({
  reducer: {
    fileList: fileListReducer
  }
})
