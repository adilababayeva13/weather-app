import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  current: { lon: '-0.1257', lat: '51.5085' },
  query: null,
  list: localStorage.getItem('cities')
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
  },
})

export const {
  setCurrent,
  addList,
  removeList,
  setQuery,
} = weatherSlice.actions

export default weatherSlice.reducer
