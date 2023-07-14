import React from 'react'
import {AiOutlineCloseCircle} from "react-icons/ai";
import {links, social} from './data.js';
import { useGlobalContext } from './Context.jsx';

export default function SideBar() {
  const {modal,handleModal,sidebar,handleSidebar} =useGlobalContext();
  return (
    <section className={`sidebar ${sidebar &&'show-sidebar'}`}>
      <button className="close-btn" onClick={handleSidebar}><AiOutlineCloseCircle className="close-btn-icon"/></button>
      <div className='links'>
        {links.map(({id,url,text})=>{
          return <li key={id}><a href={url} alt={text}>{text}</a></li>
        })}
      </div>
      <div className='social-links'>
        {social.map(({id,url,icon})=>{
          return <li key={id}><a href={url} alt={icon} target="_blank" rel="noopener noreferrer">{icon}</a></li>
        })}
      </div>
    </section>
  )
}
