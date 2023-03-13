import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { MdDeleteForever, MdOutlineModeEditOutline } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import API from '../../Components/tools/Api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function MatchList() {
    const [Team, setTeam] = useState([])
    const [Fteam, setFteam] = useState([])
    useEffect(() => {
        API.get('team')
        .then(responce => {
            setFteam(responce.data.data)
        })
        API.get('match')
            .then(responce => {
                setTeam(responce.data.data)
            })
            
       
    }, [])

    const imgteamF = (id) => {

        const fteam = Fteam.find(team => {
            if (team._id == id)
                return team
        })
        return (
            <div className='firstname'>
                <img className='ms-0' src={fteam.img} alt='' />
                {fteam.name}
            </div>
        )

    }

    const imgteamL = (id) => {

        const fteam = Fteam.find(team => {
            if (team._id == id)
                return team
        })
        console.log(fteam)
        return (
            <div className='lastname'>
                {fteam.name}
                <img className='ms-auto' src={fteam.img} alt='' />
            </div>
        )

    }

    const HandleDelete = (id) => {
        setTeam(Team.filter(item => item._id !== id))
        API.delete(`match/delete/${id}`)
        .then(response => {
          toast.success(response.data.data, {
            position: toast.POSITION.BOTTOM_RIGHT
        });
        })
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 40 },
        {
            field: 'fristteam', headerName: 'FTeam', width: 200, renderCell: (Params) => {
                return ( imgteamF(Params.row.fristteam) )
            }
        },
        { field: 'fristresult', headerName: 'VS', className: 'text-center', width: 100,renderCell: (Params) => {
            return ( 
                <div>
                    <span>{Params.row.fristresult}</span>
                    <span className='ms-5'>{Params.row.lastresult}</span>
                </div>
             )
        } },
      
        {
            field: 'lastteam',
            headerName: 'Lteam',
            className: 'text-center',
            width: 200,
            renderCell: (Params) => {
                return ( imgteamL(Params.row.lastteam) )
            }
        },
        {
            field: 'time',
            headerName: 'Time',
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
                <h2 className='text-b'>Matches</h2>
                <NavLink to='./new'>
                    <button>Create</button>
                </NavLink>
            </div>
            {/* {imgteam('63e7835b7fc2459d51107f94')} */}
            <div style={{ width: '100%', height: 'calc(100vh - 175px)' }}>
                <DataGrid rows={Team} disableSelectionOnClick columns={columns} pageSize={24} checkboxSelection />
            </div>
            <ToastContainer />
        </>
    )
}
