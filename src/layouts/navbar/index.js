import classes from './index.module.scss'
import logo from '../../assets/images/icon-light.png'
import { useEffect, useState } from 'react'
import { routes } from '../../routes'
import { Link } from 'react-router-dom'
import { ProfileIcon } from '../../icons'
import Search from '../../components/search'
import { useSelector, useDispatch } from 'react-redux'
import { setToken } from '../../store/authSlice'
import { setList } from '../../store/weatherSlice'
import jwt from 'jwt-decode'

export default function Navbar({ title }) {
  const dispatch = useDispatch()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const { token } = useSelector((state) => state.auth)

  useEffect(() => {
    async function getUser() {
      if (token) {
        const decodedToken = await jwt(token)
        await setUser(decodedToken)
        await localStorage.setItem('cities', decodedToken.cities)
        await dispatch(setList(decodedToken.cities))
        await setLoading(false)
      } else {
        await setUser(null)
        await setLoading(false)
      }
    }
    getUser()
  }, [token, dispatch])
  useEffect(() => {
    document.title = 'Weather App | ' + title
  }, [title])

  return loading ? (
    <p>Loading...</p>
  ) : (
    <header className={`container ${classes.navbar}`}>
      <Link to={routes.home.path}>
        <img src={logo} alt="logo" />
        Weather App
      </Link>
      <Search />
      <div>
        <ProfileIcon />
        {user ? (
          <div>
            <p>{user?.username}</p>|
            <span
              onClick={() => {
                localStorage.removeItem('token')
                localStorage.removeItem('cities')
                dispatch(setToken(null))
                dispatch(setList([]))
                setUser(null)
              }}
            >
              Logout
            </span>
          </div>
        ) : (
          <nav>
            <Link to={routes.login.path}>Login</Link>
            <Link to={routes.signup.path}>Sign up</Link>
          </nav>
        )}
      </div>
    </header>
  )
}
