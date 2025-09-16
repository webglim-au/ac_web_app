// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slices/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    // Add more slices here as your app grows
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


