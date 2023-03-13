import React, { useEffect, useState } from 'react'
import { FiUser, FiPackage, FiMessageSquare } from "react-icons/fi";
import { MdUpload } from "react-icons/md";
import { NavLink, useParams } from 'react-router-dom';
import API from '../../Components/tools/Api'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function MatchEdit() {
    const [Leaguelist, setLeaguelist] = useState([]);
    const [Teamlist, setTeamlist] = useState([])
    const [News, setNews] = useState({});
    const [Fristteam, setFristteam] = useState('')
    const [Fristresult, setFristresult] = useState('')
    const [Lastteam, setLastteam] = useState('');
    const [Lastresult, setLastresult] = useState('');
    const [League, setLeague] = useState('');
    const [Time, setTime] = useState('');
    const [Date, setDate] = useState('');
    const [Description, setDescription] = useState('');
    const [Poster, setPoster] = useState('')

    const { id } = useParams();
    const newsedit = { Fristteam, Fristresult, Lastteam, Lastresult, League, Time, Date, Description, Poster }

    const close = () => {
        API.get(`betting/close/${News._id}`)
        .then(responce => {
            toast.success(responce.data.data, {
                position: toast.POSITION.BOTTOM_RIGHT
            });
        })
      }

    const Update = () => {
        API.patch(`match/update/${id}`, newsedit)
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
        setPoster(img[img.length - 1])
    }

    useEffect(() => {
        API.get('league')
            .then(responce => {
                setLeaguelist(responce.data.data)
                console.log(responce.data.data)
            })
        API.get('team')
            .then(responce => {
                setTeamlist(responce.data.data)
                console.log(responce.data.data)
            })
        API.get(`match/${id}`)
            .then(responce => {
                const team = responce.data.data;
                setNews(responce.data.data);
                console.log(team);
                API.get(`league/${team.league}`)
                    .then(responce => {
                        // const leagues = responce.data.data;
                        // setNews({...News, league: leagues.name});
                        console.log(responce.data.data);
                    })
            })
    }, [])

    const team = (id) => {

        const fteam = Teamlist.find(team => {
            if (team._id == id)
                return team
        })
        console.log(fteam)
        return fteam.name


    }

    return (
        <div className='user'>
            <div className="userTitle">
                <h1>Edit Match</h1>
                <NavLink to='/matchlist/new'>
                    <button>Create</button>
                </NavLink>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="top">
                        <img src={Poster != '' ? `http://localhost:3001/image/teamlogo/${Poster}` : News.img} alt="" />
                        <div className="topTitle">
                            <span className='username'>{News.fristteam}</span>
                            <span className='title'>{News.league}</span>
                        </div>
                    </div>
                    <div className="top">
                        <img src={Poster != '' ? `http://localhost:3001/image/teamlogo/${Poster}` : News.img} alt="" />
                        <div className="topTitle">
                            <span className='username'>{News.lastteam}</span>
                            <span className='title'>{News.league}</span>
                        </div>
                    </div>
                    <div className="bottom">
                        <span className="title">Team Details</span>
                        <div className="userinfo">
                            <FiUser className='icon' />
                            <span>{News.continent}</span>
                        </div>
                        <div className="userinfo">
                            <FiUser className='icon' />
                            <span>{News.nickname}
                            </span>
                        </div>
                        <div className="userinfo">
                            <FiUser className='icon' />
                            <span>{News.team}</span>
                        </div>
                        <span className="title">Description Details</span>
                        <div className="userinfo">
                            <span>{News.time}</span>
                        </div>
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
                                <label htmlFor="">First Team</label>
                                <select onChange={e => setFristteam(e.target.value)} className="mt-1" name="" id="">
                                    <option value=''></option>
                                    {Teamlist.map((league, i) => {
                                        return (
                                            <option value={league._id}>{league.name}</option>
                                        )
                                    })}

                                </select>
                            </div>
                            <div className="updateItem">
                                <label htmlFor="">First Team Result</label>
                                <input type="number" onChange={e => setFristresult(e.target.value)} name="" id="" />
                            </div>
                            <div className="updateItem">
                                <label htmlFor="">Last Team</label>
                                <select onChange={e => setLastteam(e.target.value)} className="mt-1" name="" id="">
                                    <option value=''></option>
                                    {Teamlist.map((league, i) => {
                                        return (
                                            <option value={league._id}>{league.name}</option>
                                        )
                                    })}

                                </select>
                            </div>
                            <div className="updateItem">
                                <label htmlFor="">Last Team Result</label>
                                <input type="number" onChange={e => setLastresult(e.target.value)} name="" id="" />
                            </div>
                            <div className="updateItem">
                                <label htmlFor="">Description</label>
                                <input type="text" onChange={e => setDescription(e.target.value)} placeholder='Misagh.Amir@yahoo.com' />
                            </div>
                            <div className="updateItem">
                                <label htmlFor="">Time</label>
                                <input type="time" onChange={e => setTime(e.target.value)} placeholder='Misagh.Amir@yahoo.com' />
                            </div>
                            <div className="updateItem">
                                <label htmlFor="">data</label>
                                <input type="date" onChange={e => setDate(e.target.value)} placeholder='Misagh.Amir@yahoo.com' />
                            </div>
                            <div className="updateItem">
                                <label htmlFor="">League</label>
                                <select onChange={e => setLeague(e.target.value)} className="mt-1" name="" id="">
                                    <option value=''></option>
                                    {Leaguelist.map((league, i) => {
                                        return (
                                            <option value={league._id}>{league.name}</option>
                                        )
                                    })}

                                </select>
                            </div>
                        </div>
                        <div className="updateRight">
                            <div className="updateUpload">
                                <img src={Poster != '' ? `http://localhost:3001/image/betting/${Poster}` : News.poster} alt="" />

                                <label htmlFor="file"><MdUpload /></label>
                                <input type="file" id="file" onChange={e => UpdateImage(e)} style={{ display: 'none' }} />
                            </div>
                            <button type='button' onClick={Update}>Update</button>
                            <button type='button' onClick={close}>close</button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}
