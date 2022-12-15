import classes from './index.module.scss'
import { AddIcon, CloseIcon } from '../../icons'

export function AddButton({ children, onClick }) {
  return (
    <button onClick={onClick} className={classes.add}>
      {children} <AddIcon />
    </button>
  )
}

export function RemoveButton({ children, onClick }) {
  return (
    <button onClick={onClick} className={classes.remove}>
      {children} <CloseIcon />
    </button>
  )
}

export function Button({ children, disabled }) {
  return (
    <button
      className={`${classes.container__button} ${disabled && classes.disabled}`}
      type={'submit'}
    >
      {children}
    </button>
  )
}
