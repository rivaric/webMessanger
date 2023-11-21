import { PayloadAction } from '@reduxjs/toolkit'
import { AppSliceState } from './AppSlice'

export const defaultPending = (state: AppSliceState) => {
  state.isLoading = true
}

export const defaultRejected = (state: AppSliceState, action: PayloadAction<any>) => {
  console.log(`${action.payload} error`)
  state.isLoading = false
}