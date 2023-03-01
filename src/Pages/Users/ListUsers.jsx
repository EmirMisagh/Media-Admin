import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { MdDeleteForever, MdOutlineModeEditOutline } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import API from '../../Components/tools/Api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function ListUsers() {
  const [Users, setUsers] = useState([])
  useEffect(() =>{
    API.get('users')
    .then(responce =>{
      setUsers(responce.data.data)
      console.log(responce.data.data)
    })
  },[])
  
  const HandleDelete = (id) =>{
    API.delete(`users/delete/${id}`)
    .then(responce =>{
      toast.success(responce.data.data, {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    })
    setUsers(Users.filter(item => item._id !== id))
  }
  const columns = [
    { field: '_id', headerName: 'ID', width: 70 },
    { field: 'fname', headerName: 'First name', width: 140, renderCell: (Params) =>{
      return(
        <div className='firstname'>
          <img src={Params.row.img} alt='' />
          {Params.row.fname}
        </div>
      )
    } },
    { field: 'lname', headerName: 'Last name', width: 130 },
    { field: 'password', headerName: 'password', width: 130 },
    {
      field: 'email',
      headerName: 'Email',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 190,
     
    },
    {
      field: 'admin',
      headerName: 'admin',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 70,
     
    },
    {
      field: 'Action',
      headerName: 'Action',
      width: 150,
      renderCell: (Params) =>{
        return(
          <div>
            <NavLink to={`./user/${Params.row._id}`}>
              <MdOutlineModeEditOutline className='iconEdit' />
            </NavLink>
            <MdDeleteForever className='iconDel' onClick={() => HandleDelete(Params.row._id)} />
          </div>
        )
      }
    },
  ];
  
  
  return (
    <>
    <div style={{width: '100%', height: 'calc(100vh - 80px)'}}>
      <DataGrid rows={Users} disableSelectionOnClick columns={columns} pageSize={12} checkboxSelection />
    </div>
    <ToastContainer />
    </>
  )
}
