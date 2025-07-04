import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashbord";
import Projects from "./pages/Projects";
import Bugs from "./pages/Bugs";
import ReportBug from "./pages/ReportBug";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        {/*{PrivateRoute--->used for pages only loged in only some users can go in}*/}
        
        <Route path="/projects" element={<PrivateRoute>
          <Projects/>
        </PrivateRoute>}/>
         
         <Route path="/bugs" element={<PrivateRoute>
          <Bugs/>
        </PrivateRoute>}/>

         <Route path="/report" element={<PrivateRoute>
          <ReportBug/>
        </PrivateRoute>}/>

      </Routes>
      
    </div>
  );
}

export default App;
