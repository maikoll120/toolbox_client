import { configureStore } from '@reduxjs/toolkit'
import fileListReducer from './fileList.slice'
import filenameListReducer from './filenameList.slice'
import fileSelectReducer from './fileSelect.slice'

export default configureStore({
  reducer: {
    fileList: fileListReducer,
    filenameList: filenameListReducer,
    fileSelect: fileSelectReducer
  }
})
