import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../index.css'

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userInfo, setUserInfo] = useState({})

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      setIsLoggedIn(false)
    }
    if (token) {
      setIsLoggedIn(true)
      setUserInfo(token)
    }
  }, [])

  const logout = () => {
    localStorage.removeItem('token')
    setIsLoggedIn(false)
  }

  const displayButtons = () => {
    if (!isLoggedIn) {
      return (
        <div className='header-container'>
          <button className='btn'>
            <Link to='/login'>ログイン</Link>
          </button>
        </div>
      )
    }
    if (isLoggedIn) {
      return (
        <div className='header-container'>
          {userInfo ? <h3>ようこそ、{userInfo}さん</h3> : null}
          <button className='btn' onClick={logout}>
            ログアウト
          </button>
        </div>
      )
    }
  }

  return <>{displayButtons()}</>
}

export default Header
