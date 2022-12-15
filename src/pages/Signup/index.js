import classes from '../Login/index.module.scss'
import Input from '../../components/input'
import { Button } from '../../components/button'
import { routes } from '../../routes'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Signup() {
  const { token } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const [text, setText] = useState(true)
  const [email, setEmail] = useState(true)
  const [password, setPassword] = useState(true)

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [navigate, token])

  async function createAccount(event) {
    event.preventDefault()
    const username = document.getElementById('username').value.trim()
    const email = document.getElementById('email').value.trim()
    const password = document.getElementById('password').value
    const cities = localStorage.getItem('cities')
      ? JSON.parse(localStorage.getItem('cities'))
      : []
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/api/signup`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password,
          cities,
        }),
      },
    )

    const data = await response.json()

    if (data.status === 'ok') {
      alert('Account created successfully')
      navigate('/login')
    } else {
      alert('Error creating account')
    }
  }

  return (
    <section className={classes.login}>
      <form onSubmit={createAccount}>
        <Input
          setPrevent={setText}
          placeholder="username"
          label="Username"
          id="username"
          type="text"
        />
        <Input
          setPrevent={setEmail}
          placeholder="email@gmail.com"
          label="E-mail"
          id="email"
          type="email"
        />
        <Input
          setPrevent={setPassword}
          placeholder="At least 8 characters"
          label="Password"
          id="password"
          type="password"
        />
        <Button disabled={text || email || password}>Sign up</Button>
        <Link to={routes.login.path}>Do you have an account? Login</Link>
      </form>
    </section>
  )
}
