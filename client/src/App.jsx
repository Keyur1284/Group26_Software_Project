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
import { EditExpense } from "./pages/EditExpense";
import { Er401 } from "./pages/Er401";
import { Er403 } from "./pages/Er403";
import { Er404 } from "./pages/Er404";
import { useSelector } from "react-redux";
import { MyProfile} from './pages/MyProfile'
import { ExpenseDetails } from "./pages/ExpenseDetails";
import { Analytics } from "./pages/Analytics";
import { EmployeeSearch } from "./pages/EmployeeSearch";
import { Announcement } from "./pages/Announcement";
import { TeamMembers } from "./pages/TeamMembers";
import { Invitations } from "./pages/Invitations";
import { AboutUs } from "./pages/AboutUs";
import { NotificationEmployee } from "./pages/NotificationEmployee";
import { NotificationManager } from "./pages/NotificationManager";

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
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/projects/:projectId/dashboard" element={<ProjectDashboard />} />
                <Route path="/projects/:projectId/add-expense" element={<AddExpense />} />
                <Route path="/projects/:projectId/expenses" element={<Expense />} />
                <Route path="/projects/:projectId/expenses/:expenseId/edit-expense" element={<EditExpense />} />
                <Route path="/projects" element={<Project />} />
                <Route path="/add-project" element={<Er403 />} />
                <Route path='/employee-search' element={<Er403 />} />
                <Route path='/profile' element={<MyProfile />} />
                <Route path='/invites' element={<Invitations />} />
                <Route path='/projects/:projectId/expenses/:expenseId' element={<ExpenseDetails />} />
                <Route path='/projects/:projectId/analytics' element={<Analytics />} />
                <Route path='/projects/:projectId/announcements' element={<Announcement />} />
                <Route path='/projects/:projectId/team-members' element={<TeamMembers />} />
                <Route path='/notifications' element={<NotificationEmployee/>} />
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
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/projects/:projectId/dashboard" element={<ProjectDashboard />} />
                <Route path="/projects/:projectId/expenses" element={<Expense />} />
                <Route path="/projects" element={<Project />} />
                <Route path="/add-project" element={<AddProject />} />
                <Route path='/profile' element={<MyProfile />} />
                <Route path='/projects/:projectId/invite-employee' element={<EmployeeSearch />} />
                <Route path='/projects/:projectId/expenses/:expenseId' element={<ExpenseDetails />} />
                <Route path='/projects/:projectId/analytics' element={<Analytics />} />
                <Route path='/projects/:projectId/announcements' element={<Announcement />} />
                <Route path='/projects/:projectId/team-members' element={<TeamMembers />} />
                <Route path='/notifications' element={<NotificationManager/>} />
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
              <Route path="/about-us" element={<AboutUs />} />
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