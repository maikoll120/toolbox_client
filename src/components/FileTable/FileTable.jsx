import React, { useEffect } from 'react'
import axios from 'axios'
import { URL_API } from '../../lib/config'
import { Table } from '../../components/'
import { useSelector, useDispatch } from 'react-redux'
import { setFileList } from '../../reducers/fileList.slice'
import './FileTable.style.css'

const FileTable = () => {
  const fileList = useSelector((state) => state.fileList.value)
  const fileSelect = useSelector((state) => state.fileSelect.value)
  const dispatch = useDispatch()

  useEffect(() => {
    async function fetchData () {
      try {
        const response = await axios.get(`${URL_API}/files/data?fileName=${fileSelect}`)
        dispatch(setFileList(response.data))
      } catch (error) {
        dispatch(setFileList([]))
      }
    }

    fetchData()
  }, [fileSelect])

  return (
    <div className='table-wapper'>
      <Table head={['File Name', 'Text', 'Number', 'Hex']} data={fileList} />
    </div>
  )
}

export default FileTable
