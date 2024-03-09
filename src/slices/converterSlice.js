import { createSlice } from '@reduxjs/toolkit'

export const converterSlice = createSlice({
  name: 'converter',
    initialState: {
      fromValue: "EUR",
      toValue: "INR",
    },
  reducers: {
    setFrom: (state, action) => {
      state.fromValue = action.payload
    },
    setTo: (state, action) => {
      state.toValue = action.payload
    }
  },
})

export default converterSlice.reducer
export const { setFrom, setTo } = converterSlice.actions