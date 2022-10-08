import React from 'react'
import { Registration } from './Components/Registration';
import { Login } from './Components/Login'
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
    <Routes>
      <Route path = "/" element={<Registration />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </>
  );
}

export default App;
