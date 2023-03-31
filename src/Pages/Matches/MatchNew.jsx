import React, { useState, useEffect } from 'react'
import { FiUser } from "react-icons/fi";
import API from '../../Components/tools/Api'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function MatchNew() {
    const [Teamlist, setTeamlist] = useState([])
    const [TeamlistFilter, setTeamlistFilter] = useState([...Teamlist])
    const [Leaguelist, setLeaguelist] = useState([])
    const [Fteam, setFteam] = useState('')
    const [Lteam, setLteam] = useState('')
    const [Description, setDescription] = useState('')
    const [Time, setTime] = useState('')
    const [League, setLeague] = useState('')
    const [Date, setDate] = useState('')
    const [Img, setImg] = useState('')
    const body = {
        Fteam,
        Lteam,
        Time,
        Description,
        League,
        Img,
        Date
    }

    useEffect(() => {
        API.get('league')
            .then(responce => {
                setLeaguelist(responce.data.data)
            })
        API.get('team')
            .then(responce => {
                setTeamlist(responce.data.data)
                setTeamlistFilter(responce.data.data)
            })
    }, [])

    const UpdateImage = (e) => {
        let img = e.target.value;
        img = img.split("\\");
        setImg(img[img.length - 1])
    }

    const send = async () => {

        API.post(`match/new`, body)
            .then(response => {
                console.log(response.data.data);
                toast.success(response.data.data, {
                    position: toast.POSITION.BOTTOM_RIGHT
                });
            })
    }

    const HandleLeagueFilter = (e) =>{
        setLeague(e.target.value)
        setTeamlistFilter(Teamlist.filter(item => item.league === e.target.value))
    }

    return (
        <div className='usernew'>
            <div className="userContainer">
                <div className="userUpdate">
                    <span className="title">Create</span>
                    <form className="updateForm">
                        <div className="updateLeft">
                            <div className="updateItem">
                                <label htmlFor="">First Team</label>
                                <select onChange={e => setFteam(e.target.value)} className="mt-1" name="" id="">
                                    <option value=''></option>
                                    {TeamlistFilter.map((league, i) => {
                                        return (
                                            <option value={league._id}>{league.name}</option>
                                        )
                                    })}

                                </select>
                            </div>
                            <div className="updateItem">
                                <label htmlFor="">Last Team</label>
                                <select onChange={e => setLteam(e.target.value)} className="mt-1" name="" id="">
                                    <option value=''></option>
                                    {TeamlistFilter.map((league, i) => {
                                        return (
                                            <option value={league._id}>{league.name}</option>
                                        )
                                    })}

                                </select>
                            </div>
                            <div className="updateItem">
                                <label htmlFor="">Description</label>
                                <input type="text" placeholder='Misagh.Amir@yahoo.com' onChange={e => setDescription(e.target.value)} />
                            </div>
                            <div className="updateItem">
                                <label htmlFor="">League</label>
                                <select onChange={e => HandleLeagueFilter(e)} className="mt-1" name="" id="">
                                    <option value=''></option>
                                    {Leaguelist.map((league, i) => {
                                        return (
                                            <option value={league._id}>{league.name}</option>
                                        )
                                    })}

                                </select>
                            </div>
                            <div className="updateItem">
                                <label htmlFor="">Time</label>
                                <input type="time" placeholder='Misagh.Amir@yahoo.com' onChange={e => setTime(e.target.value)} />
                            </div>
                            <div className="updateItem">
                                <label htmlFor="">Date</label>
                                <input type="date" placeholder='+989025941001' onChange={e => setDate(e.target.value)} />
                            </div>
                        </div>
                        <div className="updateRight">
                            <div className="updateUpload">

                                <img src={Img !== '' ? `http://localhost:3001/image/betting/${Img}` : `http://localhost:3001/image/news/cristiano-ronaldo.jpg`} alt="" />

                                <label htmlFor="file"><FiUser /></label>
                                <input type="file" onChange={e => UpdateImage(e)} id="file" style={{ display: 'none' }} />
                            </div>
                            <button type='button' onClick={send}>Create</button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}
