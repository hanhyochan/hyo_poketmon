import { Suspense, useEffect, lazy } from 'react'
import './App.scss'
import { useDispatch } from 'react-redux'
import { fetchMultiplePoketmonById } from "./RTK/thunk"
import { Link, Routes, Route, useNavigate } from 'react-router-dom'
import Main from "./pages/Main.jsx"
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
      <h1 className='text-[40px] text-center'>포켓몬 도감</h1>
      <nav className='flex gap-[20px] justify-center'>
        <Link to={'/'}>메인</Link>
        <Link to={'/favorite'}>찜목록</Link>
        <input onChange={(e) => navigate(`/search?poketmon=${e.target.value}`)} className='w-[120px] border-b border-[darkgray]' />
        <span>🔍</span>
      </nav>

      <Suspense fallback={<h3>Loading...</h3>}>
        <main className='flex flex-wrap gap-[20px] justify-center pt-[20px]'>
          <Routes>
            <Route path={'/'} element={<Main />} />
            <Route path={'/detail/:poketmonId'} element={<Detail />} />
            <Route path={'/search'} element={<Search />} />
            <Route path={'/favorite'} element={<Favorite />} />
          </Routes>
        </main>
      </Suspense>
    </>
  )
}

export default App
