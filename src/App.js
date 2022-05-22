import { Route, Routes } from 'react-router-dom';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Navbar from './page/Header/Navbar';
import Home from './page/Home/Home';
import Login from './page/Login/Login';
import Register from './page/Login/Register';
import Footer from './page/Shared/Footer';
import Purchase from './page/Order/Purchase';
import RequireAuth from './page/Shared/RequireAuth';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}>  </Route>
        <Route path='/home' element={<Home></Home>}>  </Route>
        <Route path='/purchase/:id' element={<RequireAuth>
          <Purchase> </Purchase>
        </RequireAuth>}> </Route>
        <Route path='/login' element={<Login> </Login>}> </Route>
        <Route path='/register' element={<Register> </Register>} > </Route>
      </Routes>
      <Footer> </Footer>

      <ToastContainer />
    </div>
  );
}

export default App;
