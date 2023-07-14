import {useState} from 'react'
import {AiOutlineCloseCircle} from "react-icons/ai";
import { useGlobalContext } from './Context';

export default function Modal() {
 const {modal,handleModal}=useGlobalContext();

  return (
    <div className={`modal-overlay ${modal&&'show-modal'}`}>
      <div className='modal-container'>
        <h1>Welcome to Modal Container</h1>
        <button className='btn' onClick={handleModal}><AiOutlineCloseCircle/></button>
      </div>
    </div>
  )
}
