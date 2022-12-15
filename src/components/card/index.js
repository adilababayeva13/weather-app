import { TemperatureIcon, WaterIcon, WindIcon, CloseIcon } from '../../icons'
import classes from './index.module.scss'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { removeList, setQuery } from '../../store/weatherSlice'
import axios from 'axios'

export default function Card({ country }) {
  const [data, setData] = useState(null)
  const dispatch = useDispatch()
  useEffect(() => {
    const key = process.env.REACT_APP_MY_KEY
    ;(async function () {
      if (country) {
        try {
          const { data } = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${key}&units=metric`,
          )
          data && (await setData(data))
        } catch {
          console.log('error')
        }
      }
    })()
  }, [country])

  return data ? (
    <div className={classes.card}>
      <CloseIcon onClick={() => dispatch(removeList(country))} />
      <h2 onClick={() => dispatch(setQuery(country))}>{data?.name}</h2>
      <span>{data?.weather[0].description}</span>
      <p>
        <TemperatureIcon /> {data?.main.temp}°C
      </p>
      <div>
        <p>
          <WindIcon />
          {data?.wind.speed} m/s
        </p>
        <p>
          <WaterIcon />
          {data?.main.humidity}%
        </p>
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  )
}
