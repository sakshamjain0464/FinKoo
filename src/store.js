import { configureStore } from '@reduxjs/toolkit'
import currenciesReducer from './slices/currenciesSlice'
import converterReducer from './slices/converterSlice'

export const store = configureStore({
  reducer: {currencies: currenciesReducer, converter: converterReducer}
})