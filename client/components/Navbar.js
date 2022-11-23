import React from 'react'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = () => {

  const x = "1"
  return (
  <div className="bg-teal-300 flex flex-row h-14 rounded-md justify-between items-center">
    <div>
      <h1 className="w-64 text-3xl">Ideas</h1>
    </div>
    <div>
    </div>
    <nav>
      {x ? (
        <div className="w-64 flex justify-evenly justify-items-end">
          {/* The navbar will show these links after you log in */}
          <button className="border-2 p-2 rounded-md hover:bg-teal-400 active:bg-teal-500">Home</button>
          <button className="border-2 p-2 rounded-md hover:bg-teal-400 active:bg-teal-500">Logout</button>
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      )}
    </nav>
  </div>
  )
}

export default Navbar
