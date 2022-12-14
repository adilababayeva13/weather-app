import { TemperatureIcon, WaterIcon, WindIcon, CloseIcon } from '../../icons'
import classes from './index.module.scss'

export default function Card({ name, country, temp, weather, wind, humidity }) {
  return (
    <div className={classes.card}>
      <CloseIcon />
      <h2>
        {name}, {country}
      </h2>
      <span>{weather}</span>
      <p>
        <TemperatureIcon /> {temp}°C
      </p>
      <div>
        <p>
          <WindIcon />
          {wind} m/s
        </p>
        <p>
          <WaterIcon />
          {humidity}%
        </p>
      </div>
    </div>
  )
}
