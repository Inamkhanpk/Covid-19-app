import React from 'react'
import logo from './../../assets/logo.png'
const Header = ()=>{
    return(
        <div >
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand " href="!#">
  <img src={logo} width="30" height="30" className="d-inline-block align-top " alt=""/>
    Covid-19
  </a>
</nav>
</div>
    )
}

export default Header