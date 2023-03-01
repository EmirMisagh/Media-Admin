import React, { useEffect, useState } from 'react'
import { FiUser, FiPackage, FiMessageSquare} from "react-icons/fi";
import { NavLink, useParams } from 'react-router-dom';
import API from '../../Components/tools/Api'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function User(props) {
  const [User, setUser] = useState({})
  const [Fname, setFname] = useState('')
  const [Lname, setLname] = useState('')
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [Bonos, setBonos] = useState(0)
  const [Admin, setAdmin] = useState('')

  const [Image, setImage] = useState('')

  const useredit = { Fname, Lname, Email, Password, Admin, Bonos }

  const { id } = useParams();
  const Update = () =>{
    API.patch(`users/update/${id}`, useredit)
    .then(response => {
      console.log(response.data.data);
        toast.success(response.data.data, {
            position: toast.POSITION.BOTTOM_RIGHT
        });
    })
  }

  const UpdateImage = (e) =>{
    // let img = e.target.value;
    // img = img.split("\\");
    // console.log(img[2])
    const form = document.getElementById('img');
    const formData = new FormData(form);
    API.post(`users/image/${id}`, formData)
    .then(response => {
      console.log(response.data.img);
      setUser({ ...User, img: response.data.img })
      toast.success(response.data.data, {
        position: toast.POSITION.BOTTOM_RIGHT
      });
      // setUser({...User,img: response.data.data})
    })
  }
  
  useEffect(() =>{
    API.get(`users/${id}`)
    .then(responce =>{
      setUser(responce.data.data[0])
      console.log(responce.data.data[0])
    })
  },[])
  return (
    <div className='user'>
      <div className="userTitle">
        <h1>Edit User</h1>
        <NavLink to='/Users/newuser'>
          <button>Create</button>
        </NavLink>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="top">
            <img src={User.img} alt="" />
            <div className="topTitle">
              <span className='username'>{User.fname}</span>
              <span className='title'>{User.lname}</span>
            </div>
          </div>
          <div className="bottom">
            <span className="title">Accont Details</span>
            <div className="userinfo">
              <FiUser className='icon' />
              <span>{User.email}</span>
            </div>
            <div className="userinfo">
              <FiUser className='icon' />
              <span>16.7.1997
              </span>
            </div>
            <span className="title">Cantant Details</span>
            <div className="userinfo">
              <FiUser className='icon' />
              <span>{User.password}</span>
            </div>
            <div className="userinfo">
              <FiUser className='icon' />
              <span>{User.email}</span>
            </div>
            <div className="userinfo">
              <FiUser className='icon' />
              <span>Shahrud</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="title">Edit</span>
          <form className="updateForm">
            <div className="updateLeft">
              <div className="updateItem">
                <label htmlFor="">Fname</label>
                <input type="text" onChange={e => setFname(e.target.value)} placeholder={User.fname} />
              </div>
              <div className="updateItem">
                <label htmlFor="">Lname</label>
                <input type="text" onChange={e => setLname(e.target.value)} placeholder={User.lname} />
              </div>
              <div className="updateItem">
                <label htmlFor="">Email</label>
                <input type="text" onChange={e => setEmail(e.target.value)} placeholder={User.email} />
              </div>
              <div className="updateItem">
                <label htmlFor="">Password</label>
                <input type="text" placeholder={User.password} onChange={e => setPassword(e.target.value)} />
              </div>
              <div className="updateItem">
                <label htmlFor="">Status</label>
                <input type="number" placeholder={User.status} onChange={e => setBonos(e.target.value)} />
              </div>
              <div className="updateItem">
                <label htmlFor="">Admin</label>
                <select onChange={e => setAdmin(e.target.value)} className="mt-1" name="" id="">
                  <option value={'user'}>user</option>
                  <option value={'admin'}>admin</option>
                </select>
              </div>
            </div>
            <div className="updateRight">
              <div className="updateUpload">
                <form id='img'>
                    <img src={User.img} alt="" />
                    <label htmlFor="file"><FiUser /></label>
                    <input type="file" onChange={e => UpdateImage(e)} name='Image' id="file" style={{ display: 'none' }} />
                </form>
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
