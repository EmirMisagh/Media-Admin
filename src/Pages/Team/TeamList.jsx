import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { MdDeleteForever, MdOutlineModeEditOutline } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import API from '../../Components/tools/Api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function TeamList() {
  const [Team, setTeam] = useState([])
  const [League, setLeague] = useState([])
  useEffect(() =>{
    API.get('league')
    .then(responce => {
      setLeague(responce.data.data)
    })
    API.get('team')
    .then(responce =>{
      setTeam(responce.data.data)
      console.log(responce.data.data)
    })
  },[])

  const nameLeague = (id) => {

    const fteam = League.find(team => {
        if (team._id == id)
            return team
    })
    console.log(fteam)
    return (
        <div className='firstname'>
            {fteam.name}
        </div>
    )

}
    
      const HandleDelete = (id) => {
        setTeam(Team.filter(item => item._id !== id))
      }
      const columns = [
        { field: '_id', headerName: 'ID', width: 40 },
        {
          field: 'name', headerName: 'FTeam', width: 200, renderCell: (Params) => {
            return (
              <div className='firstname'>
                <img className='ms-2' src={Params.row.img} alt='' />
                {Params.row.name}
              </div>
            )
          }
        },
        // { field: 'league', headerName: 'league',className: 'text-center', width: 150,renderCell: (Params) => {
        //   return ( nameLeague(Params.row.league) )
        // } },
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
            <h2 className='text-b'>Teams</h2>
            <NavLink to='./new'>
              <button>Create</button>
            </NavLink>
          </div>
          <div style={{ width: '100%', height: 'calc(100vh - 175px)' }}>
            <DataGrid rows={Team} disableSelectionOnClick columns={columns} pageSize={24} checkboxSelection />
          </div>
        </>
      )
}
