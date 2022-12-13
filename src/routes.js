import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'

const routeItem = (id, title, path, component) => {
  return {
    id,
    title,
    path,
    component,
  }
}

const routes = {
  home: routeItem(1, 'Home', '/', Home),
  signup: routeItem(2, 'Sign up', '/signup', Signup),
  login: routeItem(3, 'Login', '/login', Login),
}

const routeArr = Object.values(routes)

export { routes, routeArr }
