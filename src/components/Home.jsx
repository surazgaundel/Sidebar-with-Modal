import React from 'react'
import {GiHamburgerMenu} from "react-icons/gi";
import { useGlobalContext } from './Context';

export default function Home() {
  const {handleModal,sidebar,handleSidebar} =useGlobalContext();
  
  return (
    <main>
      <button className={`${!sidebar?'sidebar-toggle':'hide-hamburg'} btn`} onClick={handleSidebar}><GiHamburgerMenu/></button>
      <button className='btn' onClick={handleModal}>Show Modal</button>
    </main>
  )
}
