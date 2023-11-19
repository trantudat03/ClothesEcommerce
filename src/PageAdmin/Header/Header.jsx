import React from 'react'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'

function Header({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
            <BsSearch  className='icon'/>
        </div>
        <div className='header-right flex gap-3'>
            <BsFillBellFill className='icon cursor-pointer'/>
            <BsFillEnvelopeFill className='icon cursor-pointer'/>
            <BsPersonCircle className='icon cursor-pointer'/>
        </div>
    </header>
  )
}

export default Header