import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { MdDeleteForever, MdOutlineModeEditOutline } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import API from '../../Components/tools/Api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CatagoryList() {
    const [Sport, setSport] = useState([])
    useEffect(() =>{
      API.get('sport')
      .then(responce =>{
        setSport(responce.data.data)
        console.log(responce.data.data)
      })
    },[])
  
     
      
        const HandleDelete = (id) => {
          setSport(Sport.filter(item => item._id !== id))
        }
        const columns = [
          { field: '_id', headerName: 'ID', width: 40 },
          {
            field: 'name', headerName: 'FTeam', width: 200, renderCell: (Params) => {
              return (
                <div className='firstname'>
                 
                  {Params.row.name}
                </div>
              )
            }
          },
          { field: 'league', headerName: 'league',className: 'text-center', width: 150 },
          {
            field: 'continent',
            headerName: 'continent',
            className: 'text-center',
            width: 140,
          },
          {
            field: 'nickname',
            headerName: 'nickname',
            description: 'This column has a value getter and is not sortable.',
            width: 100,
      
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
              <h2 className='text-b'>Sport</h2>
              <NavLink to='./sport/new'>
                <button>Create</button>
              </NavLink>
            </div>
            <div style={{ width: '100%', height: '350px' }}>
              <DataGrid rows={Sport} disableSelectionOnClick columns={columns} pageSize={4} checkboxSelection />
            </div>
            <div className="userTitle mt-3">
              <h2 className='text-b'>Continent</h2>
              <NavLink to='./new'>
                <button>Create</button>
              </NavLink>
            </div>
            <div className='mt-0' style={{ width: '100%', height: '350px' }}>
              <DataGrid rows={Sport} disableSelectionOnClick columns={columns} pageSize={4} checkboxSelection />
            </div>
          </>
        )
}
