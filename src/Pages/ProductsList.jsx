import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { MdDeleteForever, MdOutlineModeEditOutline } from "react-icons/md";
import { NavLink } from 'react-router-dom';

export default function ProductsList() {
  const rows = [
    { id: 1, name: 'Snow', age: 35, img:'http://localhost:3001/image/news/cristiano-ronaldo.jpg' },
    { id: 2, name: 'Lannister', age: 42, img:'http://localhost:3001/image/news/cristiano-ronaldo.jpg' },
    { id: 3, name: 'Lannister', age: 45, img:'http://localhost:3001/image/news/cristiano-ronaldo.jpg' },
    { id: 4, name: 'Stark', age: 16, img:'http://localhost:3001/image/news/cristiano-ronaldo.jpg' },
    { id: 5, name: 'Targaryen',  age: null, img:'http://localhost:3001/image/news/cristiano-ronaldo.jpg' },
    { id: 6, name: 'Lannister',  age: 42, img:'http://localhost:3001/image/news/cristiano-ronaldo.jpg' },
    { id: 7, name: 'Lannister',  age: 45, img:'' },
    { id: 8, name: 'Stark', age: 16, img:'' },
    { id: 9, name: 'Targaryen',  age: null, img:'' },
    { id: 10, name: 'Lannister',  age: 45, img:'' },
    { id: 11, name: 'Stark', age: 16, img:'' },
    { id: 12, name: 'Targaryen',  age: null, img:'' },
    { id: 13, name: 'Lannister',  age: 45, img:'' },
    { id: 14, name: 'Stark', age: 16, img:'' },
    { id: 15, name: 'Targaryen',  age: null, img:'' },
  
  ];
  const [Data, setData] = useState(rows)

  const HandleDelete = (id) =>{
    setData(Data.filter(item => item.id !== id))
  }
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'Products', headerName: 'Products', width: 170, renderCell: (Params) =>{
      return(
        <div className='firstname'>
          <img src={Params.row.img} alt='' />
          {Params.row.name}
        </div>
      )
    } },
   
    {
      field: 'Status',
      headerName: 'Status',
      type: 'number',
      width: 90,
    },
    {
      field: 'Price',
      headerName: 'Price',
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
