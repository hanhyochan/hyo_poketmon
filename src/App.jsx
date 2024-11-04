import { Suspense, useEffect, lazy } from 'react'
import './App.scss'
import { useDispatch } from 'react-redux'
import { fetchMultiplePoketmonById } from "./RTK/thunk"
import { Link, Routes, Route, useNavigate } from 'react-router-dom'
const Main = lazy(() => import("./pages/Main.jsx"))
const Detail = lazy(() => import("./pages/Detail.jsx"))
const Search = lazy(() => import("./pages/Search.jsx"))
const Favorite = lazy(() => import("./pages/Favorite.jsx"))

function App() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMultiplePoketmonById(151))
  }, [])

  return (
    <>
      <h1 className='border-t-[30px] border-t-[red] bg-black  text-white text-[40px] text-center'>포켓몬 도감</h1>
      <nav className='py-[10px] border-b-black border-b-[3px] flex gap-[20px] justify-center'>
        <Link to={'/'}>메인</Link>
        <Link to={'/favorite'}>찜목록</Link>
        <input onChange={(e) => navigate(`/search?poketmon=${e.target.value}`)} className='w-[120px] border-b border-[darkgray]' />
        <span>🔍</span>
      </nav>

      <main className='bg-[gray] flex flex-wrap gap-[20px] justify-center p-[20px]'>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path={'/'} element={<Main />} />
            <Route path={'/detail/:poketmonId'} element={<Detail />} />
            <Route path={'/search'} element={<Search />} />
            <Route path={'/favorite'} element={<Favorite />} />
          </Routes>
        </Suspense>
      </main>
    </>
  )
}

export default App
