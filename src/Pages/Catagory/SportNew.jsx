import React, { useState, useEffect } from 'react'
import { FiUser, FiPackage, FiMessageSquare} from "react-icons/fi";
import API from '../../Components/tools/Api'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function CatagoryNew() {
  const [Name, setName] = useState('')
 

  const body = { 
    Name, 
      
  }

  const send = async() =>{
    
    API.post(`sport/new`, body)
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
              <label htmlFor="">Name</label>
              <input type="text" placeholder='EmirMisagh77' onChange={e => setName(e.target.value)} />
            </div>
           
          </div>
          <div className="updateRight">
          
            <button type='button' onClick={send}>Create</button>
          </div>
        </form>
      </div>
    </div>
    <ToastContainer />
  </div>
)
}
