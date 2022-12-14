import classes from '../Login/index.module.scss'
import Input from '../../components/input'
import { Button } from '../../components/button'
import { routes } from '../../routes'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
  const [text, setText] = useState(true)
  const [email, setEmail] = useState(true)
  const [password, setPassword] = useState(true)
  return (
    <section className={classes.login}>
      <form>
        <Input setPrevent={setText} placeholder="username" label="Username" type="text" /> 
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
        <Button disabled={text || email || password}>Sign up</Button>
        <Link to={routes.login.path}>Do you have an account? Login</Link>
      </form>
    </section>
  )
}
