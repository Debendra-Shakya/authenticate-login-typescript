import React from 'react';
import './App.css';
import { CssBaseline } from "@mui/material";

import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Signup from "./pages/signup";
import Login from './pages/login';
import Profile from './pages/profile'
import ProtectedRoutes from './context/protectedroutes';

function App() {
  return (
 <>
    <CssBaseline />
      <Routes>
        <Route path='/' element={<ProtectedRoutes/>}>


       
        <Route path='/profile' element={<Profile/>}/>
        </Route>
    
       <Route path='/login' element={<Login/>}/>
        <Route path="/signup" element={<Signup  />} />
      </Routes>
 </>
  );
}

export default App;
