import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { MdDeleteForever, MdOutlineModeEditOutline } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import API from '../../Components/tools/Api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LeagueList() {
    const [League, setLeague] = useState([])
    useEffect(() =>{
      API.get('league')
      .then(responce =>{
        setLeague(responce.data.data)
        console.log(responce.data.data)
      })
    },[])
    
      const HandleDelete = (id) => {
        setLeague(League.filter(item => item._id !== id))
        API.delete(`league/delete/${id}`)
        .then(response => {
          console.log(response.data.data);
          toast.success(response.data.data, {
            position: toast.POSITION.BOTTOM_RIGHT
        });
        })
      }
      const columns = [
        { field: '_id', headerName: 'ID', width: 40 },
        {
          field: 'name', headerName: 'name', width: 190, renderCell: (Params) => {
            return (
              <div className='firstname'>
                <img className='ms-2' src={Params.row.img} alt='' />
                {Params.row.name}
              </div>
            )
          }
        },
        { field: 'continent', headerName: 'continent',className: 'text-center', width: 160 },
        {
          field: 'sport',
          headerName: 'sport',
          className: 'text-center',
          width: 90,
         
        },
        {
          field: 'euro',
          headerName: 'Euro',
          className: 'text-center',
          width: 90,
         
        },
        {
          field: 'navbar',
          headerName: 'navbar',
          className: 'text-center',
          width: 90,
         
        },
       
        {
          field: 'date',
          headerName: 'Date',
          description: 'This column has a value getter and is not sortable.',
          width: 100,
    
        },
        {
          field: 'Action',
          headerName: 'Action',
          width: 100,
          renderCell: (Params) => {
            return (
              <div>
                <NavLink to={`./edit/${Params.row._id}`}>
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
          <div className="userTitle">
            <h2 className='text-b'>Leagues</h2>
            <NavLink to='./new'>
              <button>Create</button>
            </NavLink>
          </div>
          <div style={{ width: '100%', height: 'calc(100vh - 175px)' }}>
            <DataGrid rows={League} disableSelectionOnClick columns={columns} pageSize={24} checkboxSelection />
          </div>
          <ToastContainer />
        </>
      )
}
