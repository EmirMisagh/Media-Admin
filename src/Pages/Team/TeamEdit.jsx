import React, { useEffect, useState } from 'react'
import { FiUser, FiPackage, FiMessageSquare } from "react-icons/fi";
import { MdUpload } from "react-icons/md";
import { NavLink, useParams } from 'react-router-dom';
import API from '../../Components/tools/Api'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function TeamEdit() {
  const [Leaguelist, setLeaguelist] = useState([]);
  const [News, setNews] = useState({});
  const [Name, setName] = useState('');
  const [Continent, setContinent] = useState('');
  const [League, setLeague] = useState('');
  const [Nickname, setNickname] = useState('');
  const [Img, setImg] = useState('')

  const { id } = useParams();
  const newsedit = { Name, Continent, League, Nickname, Img }


  const Update = () => {
    API.patch(`team/update/${id}`, newsedit)
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
    API.get('league')
      .then(responce =>{
        setLeaguelist(responce.data.data)
        console.log(responce.data.data)
      })
    API.get(`team/${id}`)
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

 

  return (
    <div className='user'>
      <div className="userTitle">
        <h1>Edit News</h1>
        <NavLink to='/teamlist/new'>
          <button>Create</button>
        </NavLink>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="top">
            <img src={Img != '' ? `http://localhost:3001/image/teamlogo/${Img}` : News.img} alt="" />
            <div className="topTitle">
              <span className='username'>{News.name}</span>
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
              <span>{News.league}</span>
            </div>
            <span className="title">Description Details</span>
            <div className="userinfo">
              <span>{News.Description}</span>
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
                <label htmlFor="">Name</label>
                <input type="text" onChange={e => setName(e.target.value)} placeholder='EmirMisagh77' />
              </div>
              <div className="updateItem">
                <label htmlFor="">Continent</label>
                <input type="text" onChange={e => setContinent(e.target.value)} placeholder='Misagh.Amir@yahoo.com' />
              </div>
              <div className="updateItem">
                <label htmlFor="">Nickname</label>
                <input type="text" onChange={e => setNickname(e.target.value)} placeholder='Misagh.Amir@yahoo.com' />
              </div>
              <div className="updateItem">
                <label htmlFor="">League</label>
                <select onChange={e => setLeague(e.target.value)} className="mt-1" name="" id="">
                  <option value=''></option>
                  {Leaguelist.map((league, i) =>{
                    return(
                      <option value={league._id}>{league.name}</option>
                    )
                  })}
                 
                </select>
              </div>
            </div>
            <div className="updateRight">
              <div className="updateUpload">
                <img src={Img != '' ? `http://localhost:3001/image/teamlogo/${Img}` : News.img} alt="" />

                <label htmlFor="file"><MdUpload /></label>
                <input type="file" id="file" onChange={e => UpdateImage(e)} style={{ display: 'none' }} />
              </div>
              <button type='button' onClick={Update}>Update</button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}
