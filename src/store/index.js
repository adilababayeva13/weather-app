import { configureStore } from '@reduxjs/toolkit'
import weatherSlice from './weatherSlice'
import authSlice from './authSlice'

export const store = configureStore({
  reducer: {
    weather: weatherSlice,
    auth: authSlice,
  },
})
