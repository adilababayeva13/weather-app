import { useState, useRef } from 'react'
import classes from './index.module.scss'

const Input = (props) => {
  const [error, setError] = useState(false)
  const inputRef = useRef(null)
  const inputType = props.type
  const handleError = () => {
    if (inputType === 'text') {
      setError(inputRef.current.value.length === 0)
      props.setPrevent(inputRef.current.value.length === 0)
      return
    }
    if (inputType === 'email') {
      setError(
        !/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(inputRef.current.value),
      )
      props.setPrevent(
        !/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(inputRef.current.value),
      )

      return
    }
    if (inputType === 'password') {
      setError(inputRef.current.value.length < 8)
      props.setPrevent(inputRef.current.value.length < 8)

      return
    }
  }
  return (
    <label
      className={`${classes.container__input} ${error && classes.error_input}`}
    >
      <p>{props.label}</p>
      <input
        ref={inputRef}
        onInput={() => handleError()}
        placeholder={props.placeholder}
        type={props.type}
        id={props.id}
      />
    </label>
  )
}

export default Input
