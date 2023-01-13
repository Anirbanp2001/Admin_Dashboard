import React from 'react'
import Chart from '../../components/chart/Chart'
import Datatable from '../../components/datatable/Datatable'
import Information from '../../components/information/Information'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Tables from '../../components/tables/Tables'
import './single.scss'

const Single = () => {
  return (
    <div className="single">
        <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="personal">
          <Information/>
          <Chart/>
        </div>
        <h1>Transactions:</h1>
        <Tables/>
      </div>
    </div>
    
  )
}

export default Single