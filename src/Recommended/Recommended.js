import React from 'react'
import "./Recommended.css"
import Button from '../components/Button'
export default function Recommended({handleClick}) {
  return <>
  <div>
    <h2 className='recommended-title'>Recommende</h2>
    <div className='recommended-flex'>
       <Button OnClickHandler={handleClick} value="" title="All" />
       <Button OnClickHandler={handleClick} value="Nike" title="Nike" />
       <Button OnClickHandler={handleClick} value="Adidas" title="Adidas"  />
       <Button OnClickHandler={handleClick} value="Puma" title="Puma" />
       <Button OnClickHandler={handleClick} value="Vans" title="Vans" />
    </div>
  </div>
  </>
}
