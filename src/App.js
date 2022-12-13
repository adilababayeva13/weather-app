import { routeArr } from './routes'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './layouts/navbar'

const App = () => {
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
                <Navbar title={item.title} />
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
