import React from 'react'
import './Header.css'



export default function Header({black}) {
  return(
    <header className={black ? "black" : ""}>
        <div className='header--logo'>
            <a href='/'> <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"/></a>
        </div>
        <div className='header--avatar'>
            <a href='/'> <img src="https://www.w3schools.com/howto/img_avatar.png"/></a>
        </div>
    </header>
  )
}
