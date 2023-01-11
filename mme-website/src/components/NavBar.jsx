import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'

function NavBar() {
  return (
    <div>
        <nav className='navbar'>

            <input className='searchBar' placeholder="Global Search..."/>
        <ul>
          <li><Link to='/'> Home </Link></li>
          <li><Link to='/reports'> Reports </Link></li>
          <li><Link to='/contacts'> Contacts</Link></li>
          <li><Link to='/add-customer'> Add Customer </Link></li>
          <li><Link to='/send-money'> Send Money </Link></li>
          <li><Link to='/view-orders'> View Orders </Link></li>
          <li><Link to='/offer-rate'> Offer Rate </Link></li>
        </ul>
      </nav>  
    </div>
  )
}

export default NavBar