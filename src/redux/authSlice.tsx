import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface User {
 email: string
 password: string
}

interface AuthState {
 user: User | null
}

const savedUser = localStorage.getItem("loggedUser")

const initialState: AuthState = {
 user: savedUser ? JSON.parse(savedUser) : null
}

const authSlice = createSlice({
 name: "auth",
 initialState,

 reducers: {

  login: (state, action: PayloadAction<User>) => {

   state.user = action.payload

   localStorage.setItem(
    "loggedUser",
    JSON.stringify(action.payload)
   )

  },

  logout: (state) => {

   state.user = null

   localStorage.removeItem("loggedUser")

  }

 }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer