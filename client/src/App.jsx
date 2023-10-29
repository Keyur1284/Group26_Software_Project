<<<<<<< HEAD
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
=======
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ProjectDashboard } from "./pages/ProjectDashboard";
import { Expense } from "./pages/Expense";
import { AddExpense } from "./pages/AddExpense";
import { Project } from "./pages/Project";
import { AddProject } from "./pages/AddProject";
import { Er401 } from "./pages/Er401";
import { Er403 } from "./pages/Er403";
import { useSelector } from "react-redux";
>>>>>>> 5c141bf2425e0538b3b13a6ca0611d4478a96bed

function App() {
  
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <Router>
        {user ? (
          user.role === "employee" ? (
            <>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/project/dashboard" element={<ProjectDashboard />} />
                <Route path="/expense" element={<Expense />} />
                <Route path="/add-expense" element={<AddExpense />} />
                <Route path="/project" element={<Project />} />
                <Route path="*" element={<Er403 />} />
              </Routes>
            </>
          ) : (
            <>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/project/dashboard" element={<ProjectDashboard />} />
                <Route path="/expense" element={<Expense />} />
                <Route path="/add-expense" element={<AddExpense />} />
                <Route path="/project" element={<Project />} />
                <Route path="/add-project" element={<AddProject />} />
              </Routes>
            </>
          )
        ) : (
          <>
            <Header />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<Er401 />} />
            </Routes>
          </>
        )}

<<<<<<< HEAD
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
        
=======
>>>>>>> 5c141bf2425e0538b3b13a6ca0611d4478a96bed
        <Footer />
      </Router>
    </>
  );
}

export default App;