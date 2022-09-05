import { useRoutes } from "react-router-dom"
import routers from "./routers"
import './index.css'

export default function App() {
  return (
    <>
      {useRoutes(routers)}
    </>
  )
}