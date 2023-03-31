import React, { useEffect, useMemo, useState } from 'react'
import { FiUser } from "react-icons/fi";
import { DataGrid } from '@mui/x-data-grid';
import { MdDeleteForever, MdOutlineModeEditOutline, MdUpload } from "react-icons/md";
import { ImArrowDown, ImArrowUp } from "react-icons/im";
import { NavLink, useParams } from 'react-router-dom';
import API from './tools/Api'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function TableChampion(props) {
    const [Table, setTable] = useState(props.league)
    const [Team, setTeam] = useState(props.team)

  

    useEffect(() =>{
       
        setTeam(props.team)
    setTable(props.league)
    console.log(props.league)
    console.log(Table)
    
},[])

    const imgteamF = (id) => {

        const fteam = Team.find(team => team._id === id)

        return (
            <div className='firstname'>
                <img className='ms-0' src={fteam.img} alt='' />
                {fteam.name}
            </div>
        )
    }

    const AddHandle = (id) => {
        const array = [...Table]
        let num = 0
        array.forEach((item, i) => {
            if (item.id === id) {
                item.number -= 1;
                num = item.number;
            }
        })
        array.forEach(i => {

            if (i.number === num) {
                if (i.id !== id)
                    i.number += 1;
            }
        })
        setTable(array.sort(function (a, b) {
            return a.number - b.number;
        }))
    }

    const MinHandle = (id) => {
        const array = [...Table]
        let num = 0
        array.forEach((item, i) => {
            if (item.id === id) {
                item.number += 1;
                num = item.number;
            }
        })
        array.forEach(i => {

            if (i.number === num) {
                if (i.id !== id)
                    i.number -= 1;
            }
        })
        setTable(array.sort(function (a, b) {
            return a.number - b.number;
        }))
    }

    const HandleDelete = (id) => {
        setTable(Table.filter(item => item.id !== id))

    }

    const columns = [
        { field: 'number', headerName: 'ID', width: 40 },
        {
            field: 'id', headerName: 'FTeam', width: 200, renderCell: (Params) => {
                return (imgteamF(Params.row.id))
            }
        },
        {
            field: 'point', headerName: 'Game', className: 'text-center', width: 50, renderCell: (Params) => {
                return (<input className='inputtable' type='number' value={Params.row.point} />)
            }
        },
        {
            field: 'point', headerName: 'Win', className: 'text-center', width: 50, renderCell: (Params) => {
                return (<input className='inputtable' type='number' value={Params.row.point} />)
            }
        },
        {
            field: 'point', headerName: 'Loss', className: 'text-center', width: 50, renderCell: (Params) => {
                return (<input className='inputtable' type='number' value={Params.row.point} />)
            }
        },
        {
            field: 'point', headerName: 'Drow', className: 'text-center', width: 50, renderCell: (Params) => {
                return (<input className='inputtable' type='number' value={Params.row.point} />)
            }
        },
        {
            field: 'point', headerName: 'WinSoccer', className: 'text-center', width: 50, renderCell: (Params) => {
                return (<input className='inputtable' type='number' value={Params.row.point} />)
            }
        },
        {
            field: 'point', headerName: 'LossSoccer', className: 'text-center', width: 50, renderCell: (Params) => {
                return (<input className='inputtable' type='number' value={Params.row.point} />)
            }
        },
        {
            field: 'point', headerName: 'Soccer', className: 'text-center', width: 50, renderCell: (Params) => {
                return (<input className='inputtable' type='number' value={Params.row.point} />)
            }
        },
        {
            field: 'point', headerName: 'point', className: 'text-center', width: 50, renderCell: (Params) => {
                return (<input className='inputtable' type='number' value={Params.row.point} />)
            }
        },

        {
            field: 'Action',
            headerName: 'Action',
            width: 190,
            renderCell: (Params) => {
                return (
                    <div>
                        <NavLink to={`/teamlist/edit/${Params.row.id}`}>
                            <MdOutlineModeEditOutline className='iconEdit' />
                        </NavLink>
                        <ImArrowUp className=' ms-0' onClick={() => AddHandle(Params.row.id)} />
                        <ImArrowDown className=' ms-1' onClick={() => MinHandle(Params.row.id)} />
                        <MdDeleteForever className='iconDel ms-4' onClick={() => HandleDelete(Params.row.id)} />
                    </div>
                )
            }
        },
    ];

    return (
        <div>
            <div className="userTitle">
                <h2 className='text-b mt-3'>Table</h2>
                <div>

                    <select className="mt-1 me-2" name="" id="">
                        <option value=''></option>
                        {Team.map((league, i) => {
                            return (
                                <option value={league._id}>{league.name}</option>
                            )
                        })}

                    </select>
                    <button>Add</button>
                </div>
            </div>
            <div style={{ width: '100%', height: '320px' }}>
                <DataGrid rows={Table} disableSelectionOnClick columns={columns} pageSize={4} checkboxSelection />
            </div>
        </div>
    )
}
