import classes from './index.module.scss'
import Input from '../../components/input'
import { Button } from '../../components/button'
import { routes } from '../../routes'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState(true)
  const [password, setPassword] = useState(true)
  return (
    <section className={classes.login}>
      <form>
        <Input
          setPrevent={setEmail}
          placeholder="email@gmail.com"
          label="E-mail"
          type="email"
        />
        <Input
          setPrevent={setPassword}
          placeholder="At least 8 characters"
          label="Password"
          type="password"
        />
        <Button disabled={email || password}>Login</Button>
        <Link to={routes.signup.path}>Create an account?</Link>
      </form>
    </section>
  )
}
