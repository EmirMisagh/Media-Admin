import React, { useEffect, useState } from 'react'
import { FiUser, FiPackage, FiMessageSquare} from "react-icons/fi";
import API from '../../Components/tools/Api'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function NewUser() {
  const [User, setUser] = useState({})
  const [Fname, setFname] = useState('')
  const [Lname, setLname] = useState('')
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [Admin, setAdmin] = useState('')

  const newuser = { Fname, Lname, Email, Password, Admin }

  const Created = () =>{
    API.post(`users/signin`, newuser)
    .then(response => {
      console.log(response.data.data);
        toast.success(response.data.data, {
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
                <label htmlFor="">Fname</label>
                <input type="text" onChange={e => setFname(e.target.value)} placeholder='EmirMisagh77' />
              </div>
              <div className="updateItem">
                <label htmlFor="">Lname</label>
                <input type="text" onChange={e => setLname(e.target.value)} placeholder='Emir Misagh' />
              </div>
              <div className="updateItem">
                <label htmlFor="">Email</label>
                <input type="text" onChange={e => setEmail(e.target.value)} placeholder='Misagh.Amir@yahoo.com' />
              </div>
              <div className="updateItem">
                <label htmlFor="">Password</label>
                <input type="text" onChange={e => setPassword(e.target.value)} placeholder='+989025941001' />
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
                <img src="http://localhost:3001/image/news/cristiano-ronaldo.jpg" alt="" />
                <label htmlFor="file"><FiUser /></label>
                <input type="file" id="file" style={{ display: 'none' }} />
              </div>
              <button type='button' onClick={Created}>Create</button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}
