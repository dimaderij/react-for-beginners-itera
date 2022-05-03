import React from 'react';
import './App.css';
import {default as myinfo} from './aboutme.json';
import image from './img/image.jpg';

function ShowHeader() {
  return (
    <div className='Header'>Hi, i'm {myinfo.short_name} {myinfo.last_name}</div>
  )
}

function ShowInfo() {
  return (
    <div>
      <table className='Info'>
        <tr>
          <td>Age:</td>
          <td>{myinfo.age}</td>
          <td>Phone:</td>
          <td><a href='tel:{myinfo.contact.phone}'>{myinfo.contact.phone}</a></td>
        </tr>
        <tr>
          <td>Address:</td>
          <td>{myinfo.more.address}; {myinfo.more.city}; {myinfo.more.country}</td>
          <td>Mail:</td>
          <td><a href='mailto:{myinfo.contact.email}'>{myinfo.contact.email}</a></td>
        </tr>
      </table>  
    </div>
  )
}

function ShowText() {
  return (
    <div className='Text'>
      {myinfo.more.text}
    </div>
  )
}

function ShowPhoto() {
  return (
    <img className='Photo' src={image} alt='image'></img>
  )
}

function App() {
  document.title = "My page";
  return (
    <div className='Container'>
      <div className='row'>
        <ShowPhoto />
        <ShowHeader />
        <ShowInfo /> 
      </div>
      <div className='row'>            
        <ShowText />
      </div>
    </div>  
  )
} 

export default App;
