import './App.css';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Userlayout from "../src/layout/Userlayout";
import Home from "../src/pages/user/Home";
import Login from "./pages/admin/Login";
import Adminlayout from './layout/AdminLayout';
import Register from './pages/admin/Register';
import Contact from './pages/user/Contact';
import Dashboard from './pages/admin/Dashboard';
import AdminRoute from './authRoute/AdminRoute';
import Staff from './pages/user/Staff';
import Project from './pages/user/Project';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Userlayout/>}>
            <Route path='' element={<Home/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='staff' element={<Staff/>}/>
            <Route path='project' element={<Project/>}/>
          </Route>
          <Route path='/admin/' element={<Adminlayout/>}>
            <Route path='login' element={<Login/>}/>
            <Route path='register' element={<AdminRoute><Register/></AdminRoute>}/>
            <Route path='dashboard' element={<AdminRoute><Dashboard/></AdminRoute>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
