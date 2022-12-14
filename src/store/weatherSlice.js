import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  current: { lon: '-0.1257', lat: '51.5085' },
  query: null,
  list: [],
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
    setList: (state, action) => {
      let list = [...state.list]
      list.push(action.payload)
      state.list = list
    },
  },
})

export const { setCurrent, setList, setQuery } = weatherSlice.actions

export default weatherSlice.reducer
