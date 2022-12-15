import classes from './index.module.scss'
import Card from '../card'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

export default function Aside() {
  const { list } = useSelector((state) => state.weather)
  const [data, setData] = useState(null)
  useEffect(() => {
    const token = localStorage.getItem('token')
    setData(list)
    if (token) {
      console.log('i am in')
      ;(async () => {
        await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/city`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'x-access-token': token,
          },
          body: JSON.stringify({
            cities: list,
          }),
        })
      })()
    }
  }, [list])

  return data ? (
    <aside className={classes.aside}>
      {data?.map((item, index) => (
        <Card key={`card-${index}`} country={item} />
      ))}
    </aside>
  ) : (
    <p>Loading...</p>
  )
}
