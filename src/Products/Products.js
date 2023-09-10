import React from 'react';
import {AiFillStar} from "react-icons/ai"
import {BsFillBagHeartFill} from "react-icons/bs"

import "./Products.css"
export default function Products({result}) {
  return <>
  <section className='card-container'>
   {result}
  </section>
  </>
}
