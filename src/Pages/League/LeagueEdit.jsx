import React, { useEffect, useState } from 'react'
import { FiUser, FiPackage, FiMessageSquare } from "react-icons/fi";
import { DataGrid } from '@mui/x-data-grid';
import { MdDeleteForever, MdOutlineModeEditOutline, MdUpload } from "react-icons/md";
import { ImArrowDown, ImArrowUp } from "react-icons/im";
import { NavLink, useParams } from 'react-router-dom';
import API from '../../Components/tools/Api'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LeagueEdit() {
    const [SportList, setSportList] = useState([]);
    const [News, setNews] = useState({});
    const [Name, setName] = useState('')
    const [Continent, setContinent] = useState('');
    const [Sport, setSport] = useState('');
    const [Euro, setEuro] = useState(false);
    const [Navbar, setNavbar] = useState(false);
    const [Img, setImg] = useState('')
    const [Team, setTeam] = useState([])
    const [Table, setTable] = useState([])

    const { id } = useParams();
    const newsedit = { Name, Continent, Sport, Euro, Navbar, Img }


    const Update = () => {
        API.patch(`league/update/${id}`, newsedit)
            .then(response => {
                console.log(response.data.data);
                toast.success(response.data.data, {
                    position: toast.POSITION.BOTTOM_RIGHT
                });
            })
    }

    const UpdateImage = (e) => {
        let img = e.target.value;
        img = img.split("\\");
        console.log(img[img.length - 1])
        setImg(img[img.length - 1])
    }

    useEffect(() => {
        API.get('team')
            .then(responce => {
                setTeam(responce.data.data.filter(item => item.league == id))
            })
        API.get(`sport`)
            .then(responce => {
                setSportList(responce.data.data);
            })
        API.get(`league/${id}`)
            .then(responce => {
                setNews(responce.data.data);
                setTable(responce.data.data.table.sort(function (a, b) {
                    return a.number - b.number;
                }))
            })

    }, [])

    const imgteamF = (id) => {

        const fteam = Team.find(team => {
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

    const AddHandle = (id) => {
        const array = [...Table]
        let num = 0
        array.forEach((item, i) => {
            if (item.id == id) {
                item.number -= 1;
                num = item.number;
            }
        })
        array.forEach(i => {

            if (i.number == num) {
                if (i.id != id)
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
            if (item.id == id) {
                item.number += 1;
                num = item.number;
            }
        })
        array.forEach(i => {

            if (i.number == num) {
                if (i.id != id)
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
            field: 'point', headerName: 'point', className: 'text-center', width: 250, renderCell: (Params) => {
                return (<input type='number' value={Params.row.point} />)
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
                        <ImArrowUp className=' ms-4' onClick={() => AddHandle(Params.row.id)} />
                        <ImArrowDown className=' ms-1' onClick={() => MinHandle(Params.row.id)} />
                        <MdDeleteForever className='iconDel ms-4' onClick={() => HandleDelete(Params.row.id)} />
                    </div>
                )
            }
        },
    ];

    return (
        <>
            <div className='user'>
                <div className="userTitle">
                    <h1>Edit Match</h1>
                    <NavLink to='/leaguelist/new'>
                        <button>Create</button>
                    </NavLink>
                </div>
                <div className="userContainer">
                    <div className="userShow">
                        <div className="top">
                            <img src={Img != '' ? `http://localhost:3001/image/teamlogo/league/${Img}` : News.img} alt="" />
                            <div className="topTitle">
                                <span className='username'>{News.name}</span>
                                <span className='title'>{News.continent}</span>
                            </div>
                        </div>

                        <div className="bottom">
                            <span className="title">Team Details</span>
                            <div className="userinfo">
                                <FiUser className='icon' />
                                <span>{News.name}</span>
                            </div>
                            <div className="userinfo">
                                <FiUser className='icon' />
                                <span>{News.continent}
                                </span>
                            </div>

                            <span className="title">Description Details</span>

                            <div className="userinfo">
                                <FiUser className='icon' />
                                <span>02/12/2023</span>
                            </div>
                        </div>
                    </div>
                    <div className="userUpdate">
                        <span className="title">Edit</span>
                        <form className="updateForm">
                            <div className="updateLeft">
                                <div className="updateItem">
                                    <label htmlFor="">Name</label>
                                    <input type="text" onChange={e => setName(e.target.value)} placeholder={News.name} />

                                </div>
                                <div className="updateItem">
                                    <label htmlFor="">Continent</label>
                                    <input type="text" onChange={e => setContinent(e.target.value)} placeholder={News.continent} />

                                </div>
                                <div className="updateItem">
                                    <label htmlFor="">Sport</label>
                                    <select onChange={e => setSport(e.target.value)} className="mt-1" name="" id="">
                                        <option value=''></option>
                                        {SportList.map((league, i) => {
                                            return (
                                                <option value={league._id}>{league.name}</option>
                                            )
                                        })}

                                    </select>
                                </div>
                                <div className="updateItem">
                                    <label htmlFor="">Euro</label>
                                    <select onChange={e => setEuro(e.target.value)} className="mt-1" name="" id="">
                                        <option value={false}>false</option>
                                        <option value={true}>true</option>


                                    </select>
                                </div>
                                <div className="updateItem">
                                    <label htmlFor="">Navbar</label>
                                    <select onChange={e => setNavbar(e.target.value)} className="mt-1" name="" id="">
                                        <option value={false}>false</option>
                                        <option value={true}>true</option>


                                    </select>
                                </div>
                            </div>
                            <div className="updateRight">
                                <div className="updateUpload">
                                    <img src={Img != '' ? `http://localhost:3001/image/teamlogo/league/${Img}` : News.img} alt="" />

                                    <label htmlFor="file"><MdUpload /></label>
                                    <input type="file" id="file" onChange={e => UpdateImage(e)} style={{ display: 'none' }} />
                                </div>
                                <button className='mt-4' type='button' onClick={Update}>Update</button>
                            </div>
                        </form>
                    </div>
                </div>
                <ToastContainer />

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
                <div style={{ width: '100%', height: 'calc(100vh - 175px)' }}>
                    <DataGrid rows={Table} disableSelectionOnClick columns={columns} pageSize={24} checkboxSelection />
                </div>
            </div>
        </>
    )
}
