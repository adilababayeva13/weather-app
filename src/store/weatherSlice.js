import { createSlice } from '@reduxjs/toolkit'
import jwt from 'jwt-decode'

const token = localStorage.getItem('token')
const decodedToken = token ? jwt(token) : null

const initialState = {
  current: { lon: '-0.1257', lat: '51.5085' },
  query: null,
  list: decodedToken
    ? decodedToken.cities
    : localStorage.getItem('cities')
    ? JSON.parse(localStorage.getItem('cities'))
    : [],
}

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setCurrent: (state, action) => {
      state.current = action.payload
    },
    setQuery: (state, action) => {
      state.query = action.payload
    },
    removeList: (state, action) => {
      let list = [...state.list]
      list = list.filter((item) => item !== action.payload)
      localStorage.setItem('cities', JSON.stringify(list))
      state.list = list
    },
    addList: (state, action) => {
      let list = [...state.list]
      list.push(action.payload)
      localStorage.setItem('cities', JSON.stringify(list))
      state.list = list
    },
    setList: (state, action) => {
      let list = [...state.list]
      list = action.payload
      localStorage.setItem('cities', JSON.stringify(list))
      state.list = list
    },
  },
})

export const {
  setCurrent,
  addList,
  removeList,
  setQuery,
  setList,
} = weatherSlice.actions

export default weatherSlice.reducer
