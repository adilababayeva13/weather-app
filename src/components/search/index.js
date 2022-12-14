import { SearchIcon } from '../../icons'
import classes from './index.module.css'
import { useDispatch } from 'react-redux'
import { setQuery } from '../../store/weatherSlice'
import { useRef } from 'react'

export default function Search() {
  const inputRef = useRef(null)
  const dispatch = useDispatch()
  const handleSearch = () => {
    const my_query = inputRef.current.value
    console.log(my_query)
    my_query.length > 0 && dispatch(setQuery(my_query))
  }
  return (
    <label className={classes.search}>
      <input
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        ref={inputRef}
        type="search"
        placeholder="Search"
      />
      <SearchIcon
        onClick={() => {
          handleSearch()
        }}
      />
    </label>
  )
}
