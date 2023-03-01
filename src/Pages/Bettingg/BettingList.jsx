import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { MdDeleteForever, MdOutlineModeEditOutline } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import API from '../../Components/tools/Api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function BettingList() {
  const [Betting, setBetting] = useState([])
  const [Fteam, setFteam] = useState([])

  useEffect(() => {
    API.get('team')
      .then(responce => {
        setFteam(responce.data.data)
      })
    API.get('betting')
      .then(responce => {
        setBetting(responce.data.data)
      })


  }, [])

  const rows = [
    { id: 1, vs: 'V', fteam: 'MUD', lteam: 'MNC', betting: '20467$', date: '02/12/2023', avatar: 'http://localhost:3001/image/teamlogo/manchester.png' },
    { id: 2, vs: 'V', fteam: 'MUD', lteam: 'MNC', betting: '20467$', date: '02/12/2023', avatar: 'http://localhost:3001/image/teamlogo/manchester.png' },
    { id: 3, vs: 'V', fteam: 'MUD', lteam: 'MNC', betting: '20467$', date: '02/12/2023', avatar: 'http://localhost:3001/image/news/cristiano-ronaldo.jpg' },
    { id: 4, vs: 'V', fteam: 'MUD', lteam: 'MNC', betting: '20467$', date: '02/12/2023', avatar: 'http://localhost:3001/image/news/cristiano-ronaldo.jpg' },
    { id: 5, vs: 'V', fteam: 'MUD', lteam: 'MNC', betting: '20467$', date: '02/12/2023', avatar: 'http://localhost:3001/image/news/cristiano-ronaldo.jpg' },
    { id: 6, vs: 'V', fteam: 'MUD', lteam: 'MNC', betting: '20467$', date: '02/12/2023', avatar: 'http://localhost:3001/image/news/cristiano-ronaldo.jpg' },
    { id: 7, vs: 'V', fteam: 'MUD', lteam: 'MNC', betting: '20467$', date: '02/12/2023', avatar: 'http://localhost:3001/image/news/cristiano-ronaldo.jpg' },
    { id: 8, vs: 'V', fteam: 'MUD', lteam: 'MNC', betting: '20467$', date: '02/12/2023', avatar: 'http://localhost:3001/image/news/cristiano-ronaldo.jpg' },
    { id: 9, vs: 'V', fteam: 'MUD', lteam: 'MNC', betting: '20467$', date: '02/12/2023', avatar: 'http://localhost:3001/image/news/cristiano-ronaldo.jpg' },
    { id: 10, vs: 'V', fteam: 'MUD', lteam: 'MNC', date: '02/12/2023', avatar: 'http://localhost:3001/image/news/cristiano-ronaldo.jpg' },
    { id: 11, vs: 'V', fteam: 'MUD', lteam: 'MNC', date: '02/12/2023', avatar: 'http://localhost:3001/image/news/cristiano-ronaldo.jpg' },
    { id: 12, vs: 'V', fteam: 'MUD', lteam: 'MNC', date: '02/12/2023', avatar: 'http://localhost:3001/image/news/cristiano-ronaldo.jpg' },


  ];
  const [Data, setData] = useState(rows)

  const teamF = (id) => {
    id = id.split('/')
    id = id[0]
    const fteam = Fteam.find(team => {
      if (team._id == id)
        return team
    })
    console.log(fteam)
    return (
      <div className='firstname row text-center'>
        <div className="col-6">

          <img className='ms-2' src={fteam.img} alt='' />
        </div>
        <div className="col-6 text-center">

          {fteam.nickname}
        </div>
      </div>
    )
  }

  const teamL = (id) => {
    id = id.split('/')
    id = id[id.length - 1]
    const fteam = Fteam.find(team => {
      if (team._id == id)
        return team
    })
    console.log(fteam)
    return (
      <div className='firstname row '>
        <div className="col-6 text-center">

          {fteam.nickname}
        </div>
        <div className="col-6 text-center">
          <img className='ms-2' src={fteam.img} alt='' />

        </div>
      </div>
    )
  }

  const HandleDelete = (id) => {
    API.get(`betting/close/${id}`)
    .then(responce => {
      alert(responce.data.data)
    })
  }
  const columns = [
    { field: '_id', headerName: 'ID', width: 40 },
    {
      field: 'idmatch', headerName: 'FTeam', width: 190, renderCell: (Params) => {
        return (
          <div className='first row'>
            <div className="col-4">
              <span>{Params.row.fbetting}</span>  |   <span>{Params.row.bonosf}</span>

            </div>
            <div className="col-8">

              {teamF(Params.row.idmatch)}
            </div>
          </div>
        )
      }
    },
    { field: 'vs', headerName: 'VS', className: 'text-center', width: 100 },
    {
      field: 'ldmatch',
      headerName: 'LTeam',
      className: 'text-center',
      width: 190,
      renderCell: (Params) => {
        return (
          <div className='first row'>
            <div className="col-8">

              {teamL(Params.row.idmatch)}
            </div>
            <div className="col-4">
              <span>{Params.row.lbetting}</span>  |   <span>{Params.row.bonosl}</span>
             
            </div>
          </div>
        )
      }
    },
    {
      field: 'bonosl',
      headerName: 'Betting',
      description: 'This column has a value getter and is not sortable.',
      width: 100,
      renderCell: (Params) => {
        return (
          <div className='text-center'>
            {Params.row.bonosl + Params.row.bonosf}
          </div>
        )
      }
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
            <NavLink to={`./edit/${Params.row.idmatch}`}>
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
        <h2 className='text-b'>Betting</h2>
        <NavLink to='./new'>
          <button>Create</button>
        </NavLink>
      </div>
      <div style={{ width: '100%', height: 'calc(100vh - 175px)' }}>
        <DataGrid rows={Betting} disableSelectionOnClick columns={columns} pageSize={24} checkboxSelection />
      </div>
    </>
  )
}
