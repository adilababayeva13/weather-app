import classes from './index.module.scss'
import { AddIcon, CloseIcon } from '../../icons'

export function AddButton({ children }) {
  return (
    <button className={classes.add}>
      {children} <AddIcon />
    </button>
  )
}

export function RemoveButton({ children }) {
  return (
    <button className={classes.remove}>
      {children} <CloseIcon />
    </button>
  )
}
