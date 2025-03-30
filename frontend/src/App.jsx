import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage'
import Articles from './pages/Articles'
import GetRecommendations from './pages/GetRecommendation'
import BookNow from './pages/BookNow'
import Navbar from './components/Navbar/Navbar';

function App() {

  return (
    <>
       <BrowserRouter>
       <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/articles' element={<Articles />}></Route>
          <Route path='/getrecommendations' element={<GetRecommendations />}></Route>
          <Route path='/booknow' element={<BookNow />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;