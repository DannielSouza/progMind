import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  currentUser: null
}


const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    autoAuthenticationUser: (state, action)=>{
      state.currentUser = action.payload
    },
    login: (state, action)=>{
      state.currentUser = action.payload
    }
  }
})

export const { autoAuthenticationUser, login } = userSlice.actions

export default userSlice.reducer