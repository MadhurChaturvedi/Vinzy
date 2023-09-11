import React from 'react'
import {FiHeart} from 'react-icons/fi';
import {AiOutlineShoppingCart,AiOutlineUser } from 'react-icons/ai';
import "./Nav.css"
export default function 
({ handleInputChange, query }) {
 return <nav>
   <h2 style={{paddingLeft:'100px', fontSize:"22px", fontFamily:'monospace'}}><span style={{color:'purple'}}>V</span><span style={{color:'orange'}}>I</span><span style={{color:'green'}}>N</span><span style={{color:'blue'}}>Z</span><span style={{color:'red'}}>Y</span></h2>
    <div className='nav-container'>
        <input 
        type='text'
         placeholder='Enter you search shoes' 
         onChange={handleInputChange}
         value={query} />
    </div>
   <div className='Profile-container'>
     <a href='#'>
        <FiHeart className='nav-icons' />
     </a>
     <a href='#'>
        <AiOutlineShoppingCart  className='nav-icons' />
     </a>
     <a href='#'>
        <AiOutlineUser className='nav-icons' />
     </a>
   </div>
 </nav>
}
