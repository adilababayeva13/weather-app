import classes from './index.module.scss'
import Card from '../card'
import { useSelector } from 'react-redux'

export default function Aside() {
  const { list } = useSelector((state) => state.weather)

  return (
    <aside className={classes.aside}>
      {list?.map((item, index) => (
        <Card key={`card-${index}`} country={item} />
      ))}
    </aside>
  )
}
