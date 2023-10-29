import './App.css'
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import {Home} from './pages/Home'
import {Register} from './pages/Register'
import {Login} from './pages/Login'
import {Header} from './components/Header'
import {Footer} from './components/Footer'
import { ProjectDashboard } from './pages/ProjectDashboard'
import { Expense } from './pages/Expense'
import { AddExpense } from './pages/AddExpense'
import { Project } from './pages/Project'
import { AddProject } from './pages/AddProject'
import { MyProfile} from './pages/MyProfile'

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
          <Route path='/project/dashboard' element={<ProjectDashboard />} />
          <Route path='/expense' element={<Expense />} />
          <Route path='/add-expense' element={<AddExpense />} />
          <Route path='/project' element={<Project />} />
          <Route path='/add-project' element={<AddProject />} />
          <Route path='/MyProfile' element={<MyProfile />} />
        </Routes>
        
        <Footer />

        
      </Router>
    </div>
    </>
  )
}

export default App
