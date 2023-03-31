import React, { useState, useEffect } from 'react'
import { FiUser } from "react-icons/fi";
import API from '../../Components/tools/Api'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LeagueNew() {
  const [SportList, setSportList] = useState([]);
  const [Name, setName] = useState('')
  const [Continent, seContinent] = useState('')
  const [Sport, setSport] = useState('')
  const [Date, setDate] = useState('')
  const [Img, setImg] = useState('')

  const body = {
    Name,
    Continent,
    Sport,
    Img,
    Date
  }

  useEffect(() => {
    API.get(`sport`)
      .then(responce => {
        setSportList(responce.data.data);
        console.log(responce.data.data);
      })
  }, [])

  const send = async () => {

    API.post(`league/new`, body)
      .then(response => {
        console.log(response.data.data);
        toast.success('News created', {
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
                <select onChange={e => setSport(e.target.value)} className="mt-1" name="" id="">
                  <option value={false}>false</option>
                  <option value={true}>true</option>
                 

                </select>
              </div>
              <div className="updateItem">
                <label htmlFor="">Navbar</label>
                <select onChange={e => setSport(e.target.value)} className="mt-1" name="" id="">
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
                <img src={Img !== '' ? `http://localhost:3001/image/teamlogo/league/${Img}` : `http://localhost:3001/image/news/cristiano-ronaldo.jpg`} alt="" />

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
