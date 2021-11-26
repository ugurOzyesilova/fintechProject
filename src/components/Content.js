import React from 'react'
import Sidebar from '../subcomponents//Sidebar'
import TableContainer from '../subcomponents/TableContainer'


const Content = ({data ,setData}) => {

    //console.log(data);

    return (
        <div className="content">
            <Sidebar />
            <TableContainer data = {data} setData = {setData}/>
            <div className="circle1"></div>
            <div className="circle2"></div>
        </div>
    )
}

 export default Content
