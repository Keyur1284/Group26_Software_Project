import "./App.css";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
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
import { Er404 } from "./pages/Er404";
import { useSelector } from "react-redux";
import { MyProfile} from './pages/MyProfile'
import { ExpenseDetails } from "./pages/ExpenseDetails";
import { EmployeeSearch } from "./pages/EmployeeSearch";
import { Announcement } from "./pages/Announcement";
import { TeamMembers } from "./pages/TeamMembers";
import { Invitations } from "./pages/Invitations";

function App() {
  
  const { user } = useSelector((state) => state.auth);
  // const { projectId } = useParams();

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
                <Route path="/projects/:projectId/dashboard" element={<ProjectDashboard />} />
                <Route path="/projects/:projectId/expenses" element={<Expense />} />
                <Route path="/projects/:projectId/add-expense" element={<AddExpense />} />
                <Route path="/projects" element={<Project />} />
                <Route path="/add-project" element={<Er403 />} />
                <Route path='/employee-search' element={<Er403 />} />
                <Route path='/profile' element={<MyProfile />} />
                <Route path='/invites' element={<Invitations />} />
                <Route path='/expense-details' element={<ExpenseDetails />} />
                <Route path='/projects/:projectId/announcements' element={<Announcement />} />
                <Route path='/projects/:projectId/team-members' element={<TeamMembers />} />
                <Route path='*' element={<Er404 />} />
              </Routes>
            </>
          ) : (
            <>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/projects/:projectId/dashboard" element={<ProjectDashboard />} />
                <Route path="/projects/:projectId/expenses" element={<Expense />} />
                <Route path="/projects/:projectId/add-expense" element={<AddExpense />} />
                <Route path="/projects" element={<Project />} />
                <Route path="/add-project" element={<AddProject />} />
                <Route path='/profile' element={<MyProfile />} />
                <Route path='/projects/:projectId/invite-employee' element={<EmployeeSearch />} />
                <Route path='/expense-details' element={<ExpenseDetails />} />
                <Route path='/projects/:projectId/announcements' element={<Announcement />} />
                <Route path='/projects/:projectId/team-members' element={<TeamMembers />} />
                <Route path='*' element={<Er404 />} />
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
        
        <Footer />
      </Router>
    </>
  );
}

export default App;