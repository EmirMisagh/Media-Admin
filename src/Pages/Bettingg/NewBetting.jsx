import React, { useState } from 'react'
import { FiUser, FiPackage, FiMessageSquare} from "react-icons/fi";

export default function NewBetting() {
  const [Title, setTitle] = useState('')
    const [Header, seHeader] = useState('')
    const [Description, setDescription] = useState('')
    const [Catagory, setCatagory] = useState('')
    const [League, setLeague] = useState('')
    const [Team, setTeam] = useState('')
    const [Date, setDate] = useState('')
    const body = { 
        Title, 
        Header,
        Description,
        img : "djgffhgfdf",
        Catagory,
        League,
        Team,
        Date
    }
    const send = async() =>{
    }
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
                <label htmlFor="">description</label>
                <input type="text" placeholder='Misagh.Amir@yahoo.com' onChange={e => setDescription(e.target.value)} />
              </div>
              <div className="updateItem">
                <label htmlFor="">catagory</label>
                <input type="text" placeholder='Football' onChange={e => setCatagory(e.target.value)} />
              </div>
              <div className="updateItem">
                <label htmlFor="">league</label>
                <input type="text" placeholder='Laliga' onChange={e => setLeague(e.target.value)} />
              </div>
              <div className="updateItem">
                <label htmlFor="">Team</label>
                <input type="text" placeholder='Real madrid' onChange={e => setTeam(e.target.value)} />
              </div>
              <div className="updateItem">
                <label htmlFor="">Date</label>
                <input type="date" placeholder='+989025941001' onChange={e => setDate(e.target.value)} />
              </div>
            </div>
            <div className="updateRight">
              <div className="updateUpload">
                <img src="http://localhost:3001/image/news/cristiano-ronaldo.jpg" alt="" />
                <label htmlFor="file"><FiUser /></label>
                <input type="file" id="file" style={{ display: 'none' }} />
              </div>
              <button>Create</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
