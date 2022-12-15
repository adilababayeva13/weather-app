import classes from './index.module.scss'
import Input from '../../components/input'
import { Button } from '../../components/button'
import { routes } from '../../routes'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setToken } from '../../store/authSlice'

export default function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [email, setEmail] = useState(true)
  const [password, setPassword] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      navigate('/')
    }
  }, [navigate])

  async function login(event) {
    event.preventDefault()
    const email = document.getElementById('login-email').value.trim()
    const password = document.getElementById('login-password').value
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/api/login`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      },
    )

    const data = await response.json()

    if (data?.token) {
      localStorage.setItem('token', data.token)
      dispatch(setToken(data.token))
      alert('Login successful')
      navigate('/')
    } else {
      alert('Please check your username and password')
    }
  }

  return (
    <section className={classes.login}>
      <form onSubmit={login}>
        <Input
          setPrevent={setEmail}
          placeholder="email@gmail.com"
          label="E-mail"
          id="login-email"
          type="email"
        />
        <Input
          setPrevent={setPassword}
          placeholder="At least 8 characters"
          label="Password"
          id="login-password"
          type="password"
        />
        <Button disabled={email || password}>Login</Button>
        <Link to={routes.signup.path}>Create an account?</Link>
      </form>
    </section>
  )
}
