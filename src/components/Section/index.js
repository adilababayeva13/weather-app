import classes from './index.module.scss'
import { AddButton, RemoveButton } from '../button'
import { useSelector, useDispatch } from 'react-redux'
import { addList, removeList } from '../../store/weatherSlice'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Section() {
  const dispatch = useDispatch()
  const { current, query, list } = useSelector((state) => state.weather)
  const [data, setData] = useState(null)
  const [bool, setBool] = useState(false)

  useEffect(() => {
    ;(async function () {
      if (query) {
        try {
          const { data } = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${process.env.REACT_APP_MY_KEY}&units=metric`,
          )
          data && (await setData(data))
        } catch {
          console.log('error')
        }
      }
    })()
  }, [query])
  useEffect(() => {
    ;(async function () {
      try {
        const { data } = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${current.lat}&lon=${current.lon}&appid=${process.env.REACT_APP_MY_KEY}&units=metric`,
        )
        await setData(data)
      } catch {
        console.log('error')
      }
    })()
  }, [current])
  useEffect(() => {
    if (data) {
      setBool(list.includes(data?.name))
    }
  }, [list, data])
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
        {bool ? (
          <RemoveButton
            onClick={async () => {
              await dispatch(removeList(data?.name))
            }}
          >
            Remove
          </RemoveButton>
        ) : (
          <AddButton
            onClick={async () => {
              await dispatch(addList(data?.name))
            }}
          >
            Add
          </AddButton>
        )}
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
