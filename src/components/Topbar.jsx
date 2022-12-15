import React from 'react'

const Topbar = () => {
  return (
    <header className="header">
        <a href="#" className='logo'><h1>logo</h1></a>

        <nav className="navbar">
            <ul>
                <li><a href="#">home</a></li>
                <li><a href="#">about</a></li>
                <li><a href="#">contact</a></li>
                <li><a href="#">blogs</a></li>
                <li><a href="#">login</a></li>
            </ul>
        </nav>


    </header>
  )
}

export default Topbar