import React, { useState, useEffect } from 'react'
import { FiUser, FiPackage, FiMessageSquare } from "react-icons/fi";
import API from '../../Components/tools/Api'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function NewNews() {


  const [Teamlist, setTeamlist] = useState([])
  const [Leaguelist, setLeaguelist] = useState([])
  const [Sport, setSport] = useState([])
  const [Title, setTitle] = useState('')
  const [Header, seHeader] = useState('')
  const [Description, setDescription] = useState('')
  const [Catagory, setCatagory] = useState('')
  const [League, setLeague] = useState('')
  const [Team, setTeam] = useState('')
  const [Date, setDate] = useState('')
  const [Img, setImg] = useState('')
  const [Video, setVideo] = useState(false)


  const body = {
    Title,
    Header,
    Description,
    Img,
    Catagory,
    League,
    Team,
    Video,
    Date
  }

  const send = async () => {

    API.post(`news/new`, body)
      .then(response => {
        console.log(response.data.data);
        toast.success('News created', {
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
    API.get('league')
    .then(responce =>{
      setLeaguelist(responce.data.data)
      console.log(responce.data.data)
    })
    API.get('team')
    .then(responce =>{
      setTeamlist(responce.data.data)
      console.log(responce.data.data)
    })
    API.get('sport')
    .then(responce =>{
      setSport(responce.data.data)
      console.log(responce.data.data)
    })
  },[])

  return (
    <div className='usernew'>
      <div className="userContainer">
        <div className="userUpdate">
          <span className="title">Create</span>
          <form className="updateForm">
            <div className="updateLeft">
              <div className="updateItem">
                <label htmlFor="">Title</label>
                <input type="text" placeholder='EmirMisagh77' onChange={e => setTitle(e.target.value)} />
              </div>
              <div className="updateItem">
                <label htmlFor="">Header</label>
                <input type="text" placeholder='Emir Misagh' onChange={e => seHeader(e.target.value)} />
              </div>
              <div className="updateItem">
                <label htmlFor="">Description</label>
                <input type="text" placeholder='Misagh.Amir@yahoo.com' onChange={e => setDescription(e.target.value)} />
              </div>
              <div className="updateItem">
                <label htmlFor="">Sport</label>
                <select onChange={e => setCatagory(e.target.value)} className="mt-1" name="" id="">
                  <option value=''></option>

                  {Sport.map((league, i) =>{
                    return(
                      <option value={league._id}>{league.name}</option>
                    )
                  })}
                </select>
              </div>
              <div className="updateItem">
                <label htmlFor="">league</label>
                <select onChange={e => setLeague(e.target.value)} className="mt-1" name="" id="">
                  <option value=''></option>
                  {Leaguelist.map((league, i) =>{
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
                  {Teamlist.map((league, i) =>{
                    return(
                      <option value={league._id}>{league.name}</option>
                    )
                  })}
                 
                </select>
              </div>
              <div className="updateItem">
                <label htmlFor="">Video</label>
                <select onChange={e => setVideo(e.target.value)} className="mt-1" name="" id="">
                  <option value={false}>false</option>
                  <option value={true}>true</option>
                 
                 
                </select>
              </div>
              <div className="updateItem">
                <label htmlFor="">Date</label>
                <input type="date" placeholder='+989025941001' onChange={e => setDate(e.target.value)} />
              </div>
            </div>
            <div className="updateRight">
              <div className="updateUpload">
                <img src={Img != '' ? `http://localhost:3001/image/news/${Img}` : `http://localhost:3001/image/news/cristiano-ronaldo.jpg`} alt="" />
                <label htmlFor="file"><FiUser /></label>
                <input type="file" id="file" onChange={e => UpdateImage(e)} style={{ display: 'none' }} />
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
