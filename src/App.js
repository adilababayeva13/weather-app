import { routeArr, routes } from './routes'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './layouts/navbar'
import { useEffect } from 'react'
import { usePosition } from 'use-position'
import { useDispatch } from 'react-redux'
import { setCurrent } from './store/weatherSlice'

const App = () => {
  const { latitude, longitude } = usePosition(true)
  const dispatch = useDispatch()

  useEffect(() => {
    latitude &&
      longitude &&
      dispatch(setCurrent({ lat: latitude, lon: longitude }))
  }, [latitude, longitude, dispatch])
  return (
    <BrowserRouter>
      <Routes>
        {routeArr.map((item) => (
          <Route
            exact
            path={item.path}
            key={item.id}
            element={
              <>
                {item.path === routes.home.path && (
                  <Navbar title={item.title} />
                )}
                <item.component />
              </>
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default App
