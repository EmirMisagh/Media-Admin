import React, { useEffect, useMemo, useState } from 'react'
import { FiUser } from "react-icons/fi";
import { DataGrid } from '@mui/x-data-grid';
import { MdDeleteForever, MdOutlineModeEditOutline, MdUpload } from "react-icons/md";
import { ImArrowDown, ImArrowUp } from "react-icons/im";
import { NavLink, useParams } from 'react-router-dom';
import API from './tools/Api'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function TableLeague(props) {
    const [Table, setTable] = useState(props.table)
    const [Team, setTeam] = useState(props.team)
    const [Teamadd, setTeamadd] = useState('')

    const body = { Teamadd }
    const { id } = useParams();

    const tab = props.table
    const team = props.team

    useEffect(() => {

        setTeam(props.team)
        setTable(props.table)
        console.log(props.table)
        console.log(tab)

    }, [])

    const AddTeam = () => {
        let teambody = {
            id: Teamadd,
            point: 0,
            number: (Table.length + 1)
        }
        setTable([...Table, teambody])
        API.patch(`league/tableleague/new/${id}`, body)
            .then(response => {
                console.log(response.data.data);
                toast.success(response.data.data, {
                    position: toast.POSITION.BOTTOM_RIGHT
                });
            })
    }



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

    const HandleDelete = (i) => {
        setTable(Table.filter(item => item.id !== i))
        let bod = { id: i }
        API.patch(`league/tableleague/delete/${id}`, bod)
            .then(response => {
                console.log(response.data.data);
                toast.success(response.data.data, {
                    position: toast.POSITION.BOTTOM_RIGHT
                });
            })
    }

    const columns = [
        { field: 'number', headerName: 'ID', width: 40 },
        {
            field: 'id', headerName: 'FTeam', width: 200, renderCell: (Params) => {
                return (imgteamF(Params.row.id))
            }
        },
        {
            field: 'game', headerName: 'Game', className: 'text-center', width: 50, renderCell: (Params) => {
                return (<input className='inputtable' type='number' value={Params.row.game} onChange={(e) =>{
                    Params.row.game = e.target.value;
                    e.target.value = Params.row.game;
                    console.log(Params.row);
                 }} />)
            }
        },
        {
            field: 'point', headerName: 'Win', className: 'text-center', width: 50, renderCell: (Params) => {
                return (<input className='inputtable' type='number'  />)
            }
        },
        {
            field: 'point', headerName: 'Loss', className: 'text-center', width: 50, renderCell: (Params) => {
                return (<input className='inputtable' type='number'  />)
            }
        },
        {
            field: 'point', headerName: 'Drow', className: 'text-center', width: 50, renderCell: (Params) => {
                return (<input className='inputtable' type='number' />)
            }
        },
        {
            field: 'point', headerName: 'WinSoccer', className: 'text-center', width: 50, renderCell: (Params) => {
                return (<input className='inputtable' type='number'  />)
            }
        },
        {
            field: 'point', headerName: 'LossSoccer', className: 'text-center', width: 50, renderCell: (Params) => {
                return (<input className='inputtable' type='number' />)
            }
        },
        {
            field: 'point', headerName: 'Soccer', className: 'text-center', width: 50, renderCell: (Params) => {
                return (<input className='inputtable' type='number'  />)
            }
        },
        {
            field: 'point', headerName: 'point', className: 'text-center', width: 50, renderCell: (Params) => {
                return (<input className='inputtable' type='number' value={Params.row.point} onChange={(e) =>{
                    Params.row.point = e.target.value
                    e.target.value = e.target.value;
                    console.log(Params.row)
                    console.log(Table)
                }} />)
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

                    <select onChange={e => setTeamadd(e.target.value)} className="mt-1 me-2" name="" id="">
                        <option value=''></option>
                        {Team.map((league, i) => {
                            return (
                                <option value={league._id}>{league.name}</option>
                            )
                        })}

                    </select>
                    <button onClick={AddTeam}>Add</button>
                </div>
            </div>
            <div style={{ width: '100%', height: 'calc(100vh - 175px)' }}>
                <DataGrid rows={Table} disableSelectionOnClick columns={columns} pageSize={24} checkboxSelection />
            </div>
        </div>
    )
}
