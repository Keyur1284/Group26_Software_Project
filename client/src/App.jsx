import './App.css'
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import {Home} from './pages/Home'
import {Register} from './pages/Register'
import {Login} from './pages/Login'
import {Header} from './components/Header'
import {Footer} from './components/Footer'


function App() {
  
  return (
    <>
      <div>
      <Router>

        <Header />
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        
        <Footer />

        
      </Router>
    </div>
    </>
  )
}

export default App
