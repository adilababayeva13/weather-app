import classes from './index.module.scss'
import Card from '../card'

export default function Aside() {
  const datum = {
    name: 'London',
    temp: 20,
    weather: 'Sunny',
    wind: 10,
    humidity: 20,
  }
  const data = [datum, datum, datum, datum, datum, datum]
  return (
    <aside className={classes.aside}>
      {data.map((item, index) => (
        <Card
          key={`card-${index}`}
          name={item.name}
          temp={item.temp}
          weather={item.weather}
          wind={item.wind}
          humidity={item.humidity}
        />
      ))}
    </aside>
  )
}
