import { createSlice } from '@reduxjs/toolkit'

export const currenciesSlice = createSlice({
  name: 'currencies',
    initialState: {},
  reducers: {
    setCurrrencies: (state, action) => {
      state.currencies = action.payload
    },
  },
})

export default currenciesSlice.reducer
export const { setCurrrencies } = currenciesSlice.actions