import React, { useEffect, useState } from 'react'
import { FiUser, FiPackage, FiMessageSquare } from "react-icons/fi";
import { MdUpload } from "react-icons/md";
import { NavLink, useParams } from 'react-router-dom';
import API from '../../Components/tools/Api'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function EditBetting() {
 
  const [News, setNews] = useState({});

  const { id } = useParams();

  useEffect(() => {
    API.get(`match/${id}`)
        .then(responce => {
            setNews(responce.data.data);
            console.log(News);
        })
}, [])

const close = () => {
  API.get(`betting/close/${News._id}`)
  .then(responce => {
      alert(responce.data.data);
      console.log(responce.data.data);
  })
}

  return (
    <div className='user'>
    <div className="userTitle">
      <h1>Edit Betting</h1>
      <NavLink to='/newslist/new'>
        <button>Create</button>
      </NavLink>
    </div>
    <div className="userContainer">
      <div className="userShow">
        <div className="top">
          <img src={News.poster} alt="" />
          <div className="topTitle">
            <span className='username'>{News.time}</span>
            <span className='title'>Cristiano Ronaldo</span>
          </div>
        </div>
        <div className="bottom">
          <span className="title">Accont Details</span>
          <div className="userinfo">
            <FiUser className='icon' />
            <span>Premier</span>
          </div>
          <div className="userinfo">
            <FiUser className='icon' />
            <span>Manchester united
            </span>
          </div>
          <span className="title">Cantant Details</span>
          <div className="userinfo">
            <FiUser className='icon' />
            <span>+989025941001</span>
          </div>
          <div className="userinfo">
            <FiUser className='icon' />
            <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditat</span>
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
              <label htmlFor="">Username</label>
              <input type="text" placeholder='EmirMisagh77' />
            </div>
            <div className="updateItem">
              <label htmlFor="">Full Name</label>
              <input type="text" placeholder='Emir Misagh' />
            </div>
            <div className="updateItem">
              <label htmlFor="">Email</label>
              <input type="text" placeholder='Misagh.Amir@yahoo.com' />
            </div>
            <div className="updateItem">
              <label htmlFor="">Phone</label>
              <input type="text" placeholder='+989025941001' />
            </div>
            <div className="updateItem">
              <label htmlFor="">Address</label>
              <input type="text" placeholder='Shahrud' />
            </div>
          </div>
          <div className="updateRight">
            <div className="updateUpload">
              <img src={News.poster} alt="" />
              <label htmlFor="file"><FiUser /></label>
              <input type="file" id="file" style={{ display: 'none' }} />
            </div>
            <button type='button' onClick={close}>Update</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}
