import React, { useState, useEffect } from 'react'
import { MdUpload } from "react-icons/md";
import API from '../Components/tools/Api'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Upload() {

  const UpdateTeamImage = () => {
    const form = document.getElementById('formusers');
    const formData = new FormData(form);
    API.post(`team/image`, formData)
      .then(response => {
        console.log(response.data.data);
        toast.success(response.data.data, {
          position: toast.POSITION.BOTTOM_RIGHT
        });
      })
  }

  const UpdateNewsImage = () => {
    const form = document.getElementById('formnews');
    const formData = new FormData(form);
    console.log(formData.get('ImageNews'))
    API.post(`news/image`, formData)
      .then(response => {
        console.log(response.data.data);
        toast.success(response.data.data, {
          position: toast.POSITION.BOTTOM_RIGHT
        });
      })
  }

  const UpdateLeagueImage = () => {
    const form = document.getElementById('formleague');
    const formData = new FormData(form);
    API.post(`league/image`, formData)
      .then(response => {
        console.log(response.data.data);
        toast.success(response.data.data, {
          position: toast.POSITION.BOTTOM_RIGHT
        });
      })
  }

  const UpdatePosterImage = () => {
    const form = document.getElementById('formposter');
    const formData = new FormData(form);
    API.post(`match/image`, formData)
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
          <span className="title">Upload team image</span>
          <form className="updateForm" id='formusers'>
            <div className="updateLeft">
              <div className="updateItem">
                <label htmlFor="">Title</label>
                <input type="text" name='name' placeholder='EmirMisagh77' />
              </div>
             
            </div>
            <div className="updateRight">
              <div className="updateUpload">
                <img src="http://localhost:3001/image/news/cristiano-ronaldo.jpg" alt="" />
                <label htmlFor="file"><MdUpload /></label>
                <input type="file" name='Image' id="file" style={{ display: 'none' }} />
              </div>
              <button className='mt-4' type='button' onClick={UpdateTeamImage} >Upload</button>
            </div>
          </form>
        </div>
      </div>
      <div className="userContainer">
        <div className="userUpdate">
          <span className="title">Upload news image</span>
          <form className="updateForm" id='formnews'>
            <div className="updateLeft">
              <div className="updateItem">
                <label htmlFor="">Title</label>
                <input type="text" name='name' placeholder='EmirMisagh77' />
              </div>
            </div>
            <div className="updateRight">
              <div className="updateUpload">
                <img src="http://localhost:3001/image/news/cristiano-ronaldo.jpg" alt="" />
                <label htmlFor="fileNews"><MdUpload /></label>
                <input type="file" name='ImageNews' id="fileNews" style={{ display: 'none' }} />
              </div>
              <button className='mt-4' type='button' onClick={UpdateNewsImage} >Upload</button>
            </div>
          </form>
        </div>
      </div>
      <div className="userContainer">
        <div className="userUpdate">
          <span className="title">Upload league image</span>
          <form className="updateForm" id='formleague'>
            <div className="updateLeft">
              <div className="updateItem">
                <label htmlFor="">Title</label>
                <input type="text" name='name' placeholder='EmirMisagh77' />
              </div>


             
            </div>
            <div className="updateRight">
              <div className="updateUpload">
                <img src="http://localhost:3001/image/news/cristiano-ronaldo.jpg" alt="" />
                <label htmlFor="fileleague"><MdUpload /></label>
                <input type="file" name='Image' id="fileleague" style={{ display: 'none' }} />
              </div>
              <button className='mt-4' type='button' onClick={UpdateLeagueImage} >Upload</button>
            </div>
          </form>
        </div>
      </div>
      <div className="userContainer">
        <div className="userUpdate">
          <span className="title">Upload poster image</span>
          <form className="updateForm" id='formposter'>
            <div className="updateLeft">
              <div className="updateItem">
                <label htmlFor="">Title</label>
                <input type="text" name='name' placeholder='EmirMisagh77' />
              </div>


              
            </div>
            <div className="updateRight">
              <div className="updateUpload">
                <img src="http://localhost:3001/image/news/cristiano-ronaldo.jpg" alt="" />
                <label htmlFor="fileposter"><MdUpload /></label>
                <input type="file" name='Image' id="fileposter" style={{ display: 'none' }} />
              </div>
              <button className='mt-4' type='button' onClick={UpdatePosterImage} >Upload</button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}
