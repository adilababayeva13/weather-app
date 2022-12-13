import { SearchIcon } from '../../icons'
import classes from './index.module.css'

export default function Search() {
  return (
    <label className={classes.search}>
      <input type="search" placeholder="Search" />
      <SearchIcon />
    </label>
  )
}
