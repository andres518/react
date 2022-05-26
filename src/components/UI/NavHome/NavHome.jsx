import React from 'react'
import { Link } from 'react-router-dom'


export const NavHome = () => {
  return (
    <div>
    <nav>
            <li><Link to="/">Home</Link></li>
            <li><a href="#">About</a></li>
            <li><Link to="Count">Count</Link></li>
           
    </nav>
    
    
    </div>
    
  )
}




