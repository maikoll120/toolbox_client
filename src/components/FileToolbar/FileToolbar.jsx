import React, { useEffect } from 'react'
import axios from 'axios'
import { URL_API } from '../../lib/config'
import { useSelector, useDispatch } from 'react-redux'
import { setFilenameList } from '../../reducers/filenameList.slice'
import { setFileSelect } from '../../reducers/fileSelect.slice'
import './FileToolbar.style.css'
import Form from 'react-bootstrap/Form'

const FileToolbar = () => {
  const filenameList = useSelector((state) => state.filenameList.value)
  const fileSelect = useSelector((state) => state.fileSelect.value)
  const dispatch = useDispatch()

  useEffect(() => {
    async function fetchData () {
      try {
        const response = await axios.get(`${URL_API}/files/list`)
        dispatch(setFilenameList(response.data))
      } catch (error) {
        dispatch(setFilenameList([]))
      }
    }

    fetchData()
  }, [])

  const handleChange = (event) => {
    dispatch(setFileSelect(event.target.value))
  }

  return (
    <div className='toolbar-wrapper'>
      <span style={{ fontWeight: 'bold' }}>Filter:</span>
      <Form.Select aria-label='Default select example' onChange={handleChange} value={fileSelect} style={{ width: '50%' }}>
        <option value=''>All files</option>
        {filenameList?.map(option => <option key={option} value={option}>{option}</option>)}
      </Form.Select>
    </div>
  )
}

export default FileToolbar
