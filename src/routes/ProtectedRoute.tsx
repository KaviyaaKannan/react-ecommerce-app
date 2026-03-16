import React from "react"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { RootState } from "../redux/store"

interface Props{
 children: React.ReactElement
}

const ProtectedRoute = ({ children }: Props) => {

 const user = useSelector(
  (state: RootState) => state.auth.user
 )

 if(!user){
  return <Navigate to="/login" replace />
 }

 return children

}

export default ProtectedRoute