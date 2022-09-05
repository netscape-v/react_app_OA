import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Wellcome() {
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(()=>{
      navigate('/home/workbench')
    },2000)
  }, [])

  return (
    <div>
      Wellcome
    </div>
  )
}