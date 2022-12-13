import classes from './index.module.scss'
import logo from '../../assets/images/icon-light.png'
import { useEffect } from 'react'
import { routes } from '../../routes'
import { Link } from 'react-router-dom'
import { ProfileIcon } from '../../icons'
import Search from '../../components/search'

export default function Navbar({ title }) {
  useEffect(() => {
    document.title = 'Weather App | ' + title
  }, [title])

  return (
    <header className={`container ${classes.navbar}`}>
      <Link to={routes.home.path}>
        <img src={logo} alt="logo" />
        Weather App
      </Link>
      <Search />
      <div>
        <ProfileIcon />
        <nav>
          <Link to={routes.login.path}>Login</Link>
          <Link to={routes.signup.path}>Sign up</Link>
        </nav>
      </div>
    </header>
  )
}
