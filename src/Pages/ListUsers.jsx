import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { MdDeleteForever, MdOutlineModeEditOutline } from "react-icons/md";
import { NavLink } from 'react-router-dom';


export default function ListUsers() {
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, avatar:'http://localhost:3001/image/news/cristiano-ronaldo.jpg' },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, avatar:'http://localhost:3001/image/news/cristiano-ronaldo.jpg' },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, avatar:'http://localhost:3001/image/news/cristiano-ronaldo.jpg' },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, avatar:'http://localhost:3001/image/news/cristiano-ronaldo.jpg' },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, avatar:'http://localhost:3001/image/news/cristiano-ronaldo.jpg' },
    { id: 6, lastName: 'Lannister', firstName: 'Cersei', age: 42, avatar:'http://localhost:3001/image/news/cristiano-ronaldo.jpg' },
    { id: 7, lastName: 'Lannister', firstName: 'Jaime', age: 45, avatar:'' },
    { id: 8, lastName: 'Stark', firstName: 'Arya', age: 16, avatar:'' },
    { id: 9, lastName: 'Targaryen', firstName: 'Daenerys', age: null, avatar:'' },
    { id: 10, lastName: 'Lannister', firstName: 'Jaime', age: 45, avatar:'' },
    { id: 11, lastName: 'Stark', firstName: 'Arya', age: 16, avatar:'' },
    { id: 12, lastName: 'Targaryen', firstName: 'Daenerys', age: null, avatar:'' },
    { id: 13, lastName: 'Lannister', firstName: 'Jaime', age: 45, avatar:'' },
    { id: 14, lastName: 'Stark', firstName: 'Arya', age: 16, avatar:'' },
    { id: 15, lastName: 'Targaryen', firstName: 'Daenerys', age: null, avatar:'' },
  
  ];
  const [Data, setData] = useState(rows)

  const HandleDelete = (id) =>{
    setData(Data.filter(item => item.id !== id))
  }
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 170, renderCell: (Params) =>{
      return(
        <div className='firstname'>
          <img src={Params.row.avatar} alt='' />
          {Params.row.firstName}
        </div>
      )
    } },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
     
    },
    {
      field: 'Action',
      headerName: 'Action',
      width: 150,
      renderCell: (Params) =>{
        return(
          <div>
            <NavLink to={`./user/${Params.id}`}>
              <MdOutlineModeEditOutline className='iconEdit' />
            </NavLink>
            <MdDeleteForever className='iconDel' onClick={() => HandleDelete(Params.id)} />
          </div>
        )
      }
    },
  ];
  
  
  return (
    <div style={{width: '100%', height: 'calc(100vh - 80px)'}}>
      <DataGrid rows={Data} disableSelectionOnClick columns={columns} pageSize={12} checkboxSelection />
    </div>
  )
}
