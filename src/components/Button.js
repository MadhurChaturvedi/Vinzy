import React from 'react'

export default function Button({OnClickHandler,value,title}) {
    return <button onClick={OnClickHandler} value={value} className='btns'>
        {title}
        </button>
}
