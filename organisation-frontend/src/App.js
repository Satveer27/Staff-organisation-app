import './App.css';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Userlayout from "../src/layout/Userlayout";
import Home from "../src/pages/user/Home";
import Login from "./pages/admin/Login";
import Adminlayout from './layout/AdminLayout';
import Register from './pages/admin/Register';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Userlayout/>}>
            <Route path='' element={<Home/>}/>
          </Route>
          <Route path='/admin/' element={<Adminlayout/>}>
            <Route path='login' element={<Login/>}/>
            <Route path='register' element={<Register/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
