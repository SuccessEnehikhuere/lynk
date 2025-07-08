import { createSlice } from '@reduxjs/toolkit'

interface AlertState {
  showCopyAlert: boolean
}

const initialState: AlertState = {
  showCopyAlert: false,
}

const alertSlice = createSlice({
  name: 'alertSlice',
  initialState,
  reducers: {
    toggleCopyModal: (state, action) => {
      if (state.showCopyAlert) {
        state.showCopyAlert = false
      }
      state.showCopyAlert = action.payload
    },
  },
})

export default alertSlice.reducer;
export const { toggleCopyModal } = alertSlice.actions
