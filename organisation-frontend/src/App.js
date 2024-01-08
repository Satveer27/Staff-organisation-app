import './App.css';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Userlayout from "../src/layout/Userlayout";
import Home from "../src/pages/user/Home";
import Login from "../src/pages/user/Login";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Userlayout/>}>
            <Route path='' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
