import React, { useEffect } from 'react'
import axios from 'axios'
import { URL_API } from '../../lib/config'
import { Table } from '../../components/'
import { useSelector, useDispatch } from 'react-redux'
import { setFileList } from '../../reducers/fileList.slice'
import './FileTable.style.css'

const FileTable = () => {
  const fileList = useSelector((state) => state.fileList.value)
  const dispatch = useDispatch()

  useEffect(() => {
    async function fetchData () {
      try {
        const response = await axios.get(`${URL_API}/files/data`)
        dispatch(setFileList(response.data))
      } catch (error) {
        dispatch(setFileList([]))
      }
    }

    fetchData()
  }, [])

  return (
    <div className='table-wapper'>
      <Table head={['File Name', 'Text', 'Number', 'Hex']} data={fileList} />
    </div>
  )
}

export default FileTable
