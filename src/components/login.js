import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import '../index.css'

const Login = () => {
  const history = useHistory()

  const [info, setInfo] = useState({
    nickname: '',
    email: '',
    password: '',
  })

  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (info.nickname === '' || info.email === '' || info.password === '') {
      setError('未入力の項目があります')
      return
    }
    localStorage.setItem('token', info.nickname)
    history.push('/')
  }

  return (
    <div className='container'>
      <h3>ログイン</h3>
      <p>{error}</p>

      <div className='form'>
        <form method='post' onSubmit={handleSubmit} style={{ width: '100%' }}>
          <div>
            <input
              onChange={(e) => setInfo({ ...info, nickname: e.target.value })}
              value={info.nickname}
              className='form__input'
              type='text'
              placeholder='ニックネーム'
            />
          </div>
          <div>
            <input
              onChange={(e) => setInfo({ ...info, email: e.target.value })}
              value={info.email}
              type='text'
              placeholder='メールアドレス'
            />
          </div>
          <div>
            <input
              onChange={(e) => setInfo({ ...info, password: e.target.value })}
              value={info.password}
              type='text'
              placeholder='パスワード'
            />
          </div>
          <button className='btn' type='submit'>
            ログイン
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
