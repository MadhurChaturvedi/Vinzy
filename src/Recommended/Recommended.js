import React from 'react'
import "./Recommended.css"
import Button from '../components/Button'
export default function Recommended({handleChange}) {
  return <>
  <div>
    <h2 className='recommended-title'>Recommende</h2>
    <div className='recommended-flex'>
       <Button OnClickHandler={handleChange} value="" title="All" />
       <Button OnClickHandler={handleChange} value="Nike" title="Nike" />
       <Button OnClickHandler={handleChange} value="Adidas" title="Adidas"  />
       <Button OnClickHandler={handleChange} value="Puma" title="Puma" />
       <Button OnClickHandler={handleChange} value="Vans" title="Vans" />
    </div>
  </div>
  </>
}
