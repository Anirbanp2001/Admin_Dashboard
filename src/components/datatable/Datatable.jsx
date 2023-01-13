import React from 'react'
import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../datatablesource';
import {Link} from 'react-router-dom'


const Datatable = () => {
  const actionCol=[
    {
      field:"action", headerName:"Action", width:250, renderCell:()=>{
        return(
          <div className='actions'>
            <Link to='/users/test' style={{textDecoration:"none"}}>
            <div className='view'>View</div>
            </Link>
            <div className='delete'>Delete</div>
          </div>
        )
      }
    }
  ]
  return (
    <div className='datatable'>
    <DataGrid
      rows={userRows}
      columns={userColumns.concat(actionCol)}
      pageSize={5}
      rowsPerPageOptions={[5]}
      checkboxSelection
    />
  </div>
  )
}

export default Datatable