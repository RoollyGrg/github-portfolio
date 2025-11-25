import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Portfolio
        </Link>
        <ul className="nav-menu">
          <li>
            <Link
              to="/"
              className={location.pathname === '/' ? 'active' : ''}
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              to="/work-samples"
              className={location.pathname === '/work-samples' ? 'active' : ''}
            >
              Work Samples
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              className={location.pathname === '/skills' ? 'active' : ''}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/education"
              className={location.pathname === '/education' ? 'active' : ''}
            >
              Education
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
