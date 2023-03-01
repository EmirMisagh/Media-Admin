import React, { useEffect, useState } from 'react'
import { FiUser, FiPackage, FiMessageSquare} from "react-icons/fi";
import { NavLink, useParams } from 'react-router-dom';
import API from '../../Components/tools/Api'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function EditNews(props) {
  const [TeamList, setTeamList] = useState([]);
  const [LeagueList, setLeagueList] = useState([]);
  const [SportList, setSportList] = useState([]);
  const [News, setNews] = useState({});
  const [Title, setTitle] = useState('');
  const [Head, setHead] = useState('');
  const [Catagory, setCatagory] = useState('');
  const [League, setLeague] = useState('');
  const [Team, setTeam] = useState('');
  const [Descriptions, setDescriptions] = useState('');
  const [Img, setImg] = useState('')


  const { id } = useParams();
  const newsedit = { Title, Head, Descriptions, Catagory, League, Team, Img }


  const Update = () =>{
    API.patch(`news/update/${id}`, newsedit)
    .then(response => {
      console.log(response.data.data);
        toast.success(response.data.data, {
            position: toast.POSITION.BOTTOM_RIGHT
        });
    })
  }

  const UpdateImage = (e) =>{
    let img = e.target.value;
    img = img.split("\\");
    console.log(img[img.length - 1])
    setImg(img[img.length - 1])
  }

  useEffect(() =>{
    API.get(`news/${id}`)
    .then(responce =>{
      setNews(responce.data.data)
      // console.log(responce.data.data)
    })
    API.get(`team`)
    .then(responce =>{
      setTeamList(responce.data.data)
      // console.log(responce.data.data)
    })
    API.get(`league`)
    .then(responce =>{
      setLeagueList(responce.data.data)
      // console.log(responce.data.data)
    })
    API.get(`sport`)
    .then(responce =>{
      setSportList(responce.data.data)
      // console.log(responce.data.data)
    })
    
  },[])

  useEffect(() =>{
   
    if(News != {})
      team()
  })

  const team = () =>{
    API.get(`team/${News.team}`)
    .then(responce =>{
      let teamone = responce.data.data;
      console.log(teamone)
      setNews({ ...News, team: teamone.name})
    })
    API.get(`league/${News.league}`)
    .then(responce =>{
      let teamone = responce.data.data;
      console.log(teamone)
      setNews({ ...News, league: teamone.name})
    })
    API.get(`sport/${News.catagory}`)
    .then(responce =>{
      let teamone = responce.data.data;
      console.log(teamone)
      setNews({ ...News, catagory: teamone.name})
    })
  }

  return (
    <div className='user'>
    <div className="userTitle">
      <h1>Edit News</h1>
      <NavLink to='/newslist/new'>
        <button>Create</button>
      </NavLink>
    </div>
    <div className="userContainer">
      <div className="userShow">
        <div className="top">
        <img src={Img != '' ? `http://localhost:3001/image/news/${Img}` : News.img} alt="" />
          <div className="topTitle">
            <span className='username'>{News.title}</span>
            <span className='title'>{News.head}</span>
          </div>
        </div>
        <div className="bottom">
          <span className="title">News Details</span>
          <div className="userinfo">
            <FiUser className='icon' />
            <span>{News.catagory}</span>
          </div>
          <div className="userinfo">
            <FiUser className='icon' />
            <span>{News.league}
            </span>
          </div>
          <div className="userinfo">
            <FiUser className='icon' />
            <span>{News.team}</span>
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
              <label htmlFor="">Title</label>
              <input type="text" onChange={e => setTitle(e.target.value)} placeholder={News.title} />
            </div>
            <div className="updateItem">
              <label htmlFor="">Header</label>
              <input type="text" onChange={e => setHead(e.target.value)} placeholder={News.head} />
            </div>
            <div className="updateItem">
              <label htmlFor="">Description</label>
              <input type="text" onChange={e => setDescriptions(e.target.value)} placeholder={News.Description} />
            </div>
            <div className="updateItem">
              <label htmlFor="">Catagory</label>
              <select onChange={e => setCatagory(e.target.value)} className="mt-1" name="" id="">
                  <option value=''></option>

                  {SportList.map((league, i) =>{
                    return(
                      <option value={league._id}>{league.name}</option>
                    )
                  })}
                </select>
            </div>
            <div className="updateItem">
              <label htmlFor="">League</label>
              <select onChange={e => setLeague(e.target.value)} className="mt-1" name="" id="">
                  <option value=''></option>
                  {LeagueList.map((league, i) =>{
                    return(
                      <option value={league._id}>{league.name}</option>
                    )
                  })}
                 
                </select>
            </div>
            <div className="updateItem">
              <label htmlFor="">Team</label>
              <select onChange={e => setTeam(e.target.value)} className="mt-1" name="" id="">
                  <option value=''></option>
                  {TeamList.map((league, i) =>{
                    return(
                      <option value={league._id}>{league.name}</option>
                    )
                  })}
                 
                </select>
            </div>
          </div>
          <div className="updateRight">
            <div className="updateUpload">
            <img src={Img != '' ? `http://localhost:3001/image/news/${Img}` : News.img} alt="" />
              <label htmlFor="file"><FiUser /></label>
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
