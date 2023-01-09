import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'

function NavBar() {
  return (
    <div>
        <nav className='navbar'>

            <input className='searchBar' placeholder="Global Search..."/>
        <ul>
          <Link to='/'> Home </Link>
          <Link to='/reports'> Reports </Link>
          <Link to='/contacts'> Contacts</Link>
          <Link to='/add-customer'> Add Customer </Link>
          <Link to='/send-money'> Send Money </Link>
          <Link to='/view-orders'> View Orders </Link>
          <Link to='/offer-rate'> Offer Rate </Link>
        </ul>
      </nav>  
    </div>
  )
}

export default NavBar