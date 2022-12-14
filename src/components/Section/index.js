import classes from './index.module.scss'
import { AddButton, RemoveButton } from '../button'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Section() {
  const { current } = useSelector((state) => state.weather)
  const [data, setData] = useState(null)
  useEffect(() => {
    ;(async function () {
      const key = process.env.REACT_APP_MY_KEY
      try {
        const { data } = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${current.lat}&lon=${current.lon}&appid=${key}&units=metric`,
        )
        await setData(data)
        console.log(data)
      } catch {
        console.log('error')
      }
    })()
  }, [current])
  return data ? (
    <section className={classes.section}>
      <div>
        <h1>
          {data?.name}, {data?.sys?.country}
        </h1>
        <p>{data?.weather[0].description}</p>
        <span>{data?.main.temp}°C</span>
        <p>Feels like {data?.main.feels_like}°C</p>
        <ul>
          <li>{data?.wind.speed}m/s SSE</li>·
          <li>Humidity:{data?.main.humidity}%</li>·
          <li>Visibility:{data?.visibility}km</li>
        </ul>
        <AddButton>Add</AddButton>
        {/* <RemoveButton>Remove</RemoveButton> */}
      </div>
      <figure>
        <img
          src={`https://raw.githubusercontent.com/lipis/flag-icons/a108610f6372e5ba4c8a8f80cab39f88c676a742/flags/4x3/${data?.sys.country.toLowerCase()}.svg`}
          alt={data?.sys.country}
        />
      </figure>
    </section>
  ) : (
    <p>Loading...</p>
  )
}
