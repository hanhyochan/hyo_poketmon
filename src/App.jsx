import { useEffect, useState } from 'react'
import './App.scss'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMultiplePoketmonById } from "./RTK/thunk"

function App() {
  const dispatch = useDispatch()
  const poketmonData = useSelector(state => state.poketmon)
  console.log(poketmonData)
  useEffect(() => {
    dispatch(fetchMultiplePoketmonById(151))
  }, [])

  return (
    <>
  <h1 className='text-[40px] text-center'>포켓몬 도감</h1>
    </>
  )
}

export default App
