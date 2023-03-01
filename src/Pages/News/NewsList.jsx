import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { MdDeleteForever, MdOutlineModeEditOutline } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import API from '../../Components/tools/Api'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function NewsList() {
  const [TeamList, setTeamList] = useState([]);
  const [LeagueList, setLeagueList] = useState([]);
  const [News, setNews] = useState([])
  useEffect(() =>{
    API.get('team')
    .then(responce => {
      setTeamList(responce.data.data)
    })
    API.get(`league`)
    .then(responce =>{
      setLeagueList(responce.data.data)
      // console.log(responce.data.data)
    })
    API.get('news')
    .then(responce =>{
      setNews(responce.data.data)
    })
  },[])
 
  const leage = (id) => {
    const fteam = LeagueList.find(team => {
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
    API.delete(`news/delete/${id}`)
    .then(responce =>{
      toast.success(responce.data.data, {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    })
    setNews(News.filter(item => item._id !== id))
  }
  
  const columns = [
    { field: '_id', headerName: 'ID', width: 40 },
    {
      field: 'title', headerName: 'Title', width: 190, renderCell: (Params) => {
        return (
          <div className='firstname'>
            <img src={Params.row.img} alt='' />
            {Params.row.title}
          </div>
        )
      }
    },
    { field: 'head', headerName: 'Header', width: 130 },
    {
      field: 'Description',
      headerName: 'Description',
      width: 150,
    },
    {
      field: 'team',
      headerName: 'team',
      width: 70,
    },
    {
      field: 'league',
      headerName: 'league',
      width: 70,
    //   renderCell: (Params) => {
    //     return ( leage(Params.row.league) )
    // }
      // renderCell: (Params) => {
      //   return (
      //     <div>
      //       {() => leag(Params.row.league)}
      //     </div>
      //   )
         
        
      // }
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
      renderCell: (Params) =>{
        return(
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
        <h1>News</h1>
        <NavLink to='./new'>
          <button>Create</button>
        </NavLink>
      </div>
      <div style={{ width: '100%', height: 'calc(100vh - 175px)' }}>
        <DataGrid rows={News} disableSelectionOnClick columns={columns} pageSize={11} checkboxSelection />
      </div>
      <ToastContainer />
    </>
  )
}
