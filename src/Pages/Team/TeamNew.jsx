import React, { useState, useEffect } from 'react'
import { MdUpload } from "react-icons/md";
import API from '../../Components/tools/Api'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function TeamNew() {

  const [Teamlist, setTeamlist] = useState([])
  const [Leaguelist, setLeaguelist] = useState([])
    const [Name, setName] = useState('')
    const [Continent, seContinent] = useState('')
    const [Nickname, setNickname] = useState('')
    const [League, setLeague] = useState('')
    const [Date, setDate] = useState('')
    const [Img, setImg] = useState('')
    const body = { 
      Name, 
        Continent,
        Nickname,
        League,
        Img,
        Date
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
    },[])

    const UpdateImage = (e) =>{
      let img = e.target.value;
      img = img.split("\\");
      console.log(img[img.length - 1])
      setImg(img[img.length - 1])
    }

    const send = async() =>{
      
      API.post(`team/new`, body)
      .then(response => {
        console.log(response.data.data);
        toast.success('News created', {
          position: toast.POSITION.BOTTOM_RIGHT
      });
      })
    }

  return (
    <div className='usernew'>
      <div className="userContainer">
        <div className="userUpdate">
          <span className="title">Create</span>
          <form className="updateForm">
            <div className="updateLeft">
              <div className="updateItem">
                <label htmlFor="">Name</label>
                <input type="text" placeholder='EmirMisagh77' onChange={e => setName(e.target.value)} />
              </div>
              <div className="updateItem">
                <label htmlFor="">Continent</label>
                <input type="text" placeholder='Emir Misagh' onChange={e => seContinent(e.target.value)} />
              </div>
              <div className="updateItem">
                <label htmlFor="">Nickname</label>
                <input type="text" placeholder='Misagh.Amir@yahoo.com' onChange={e => setNickname(e.target.value)} />
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
              <div className="updateItem">
                <label htmlFor="">Date</label>
                <input type="date" placeholder='+989025941001' onChange={e => setDate(e.target.value)} />
              </div>
            </div>
            <div className="updateRight">
              <div className="updateUpload">
              <img src={Img != '' ? `http://localhost:3001/image/teamlogo/${Img}` : `http://localhost:3001/image/teamlogo/real-madrid.png`} alt="" />
               
                <label htmlFor="file"><MdUpload /></label>
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
