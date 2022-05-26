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
import AllParts from './page/Parts/AllParts';
import Dashboard from './page/Dashboard/Dashboard';
import MyOrders from './page/Dashboard/MyOrders';
import AddReview from './page/Dashboard/AddReview';
import MyProfile from './page/Dashboard/MyProfile';
import MyPortfolio from './page/MyPortfolio/MyPortfolio';
import Blogs from './page/Blogs/Blogs';
import NotFound from './page/Shared/NotFound';
import Users from './page/Dashboard/Users';
import ManageProducts from './page/Dashboard/ManageProducts';
import AddProduct from './page/Dashboard/AddProduct';
import ManageOrders from './page/Dashboard/ManageOrders';
import Payment from './page/Dashboard/Payment';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}>  </Route>
        <Route path='/home' element={<Home></Home>}>  </Route>\
        <Route path='/allparts' element={<AllParts></AllParts>}> </Route>

        <Route path='/purchase/:id' element={<RequireAuth>
          <Purchase> </Purchase>
        </RequireAuth>}> </Route>

        <Route path='/dashboard' element={<Dashboard> </Dashboard>}>
          <Route index element={<MyProfile> </MyProfile>}> </Route>
          <Route path='reviews' element={<AddReview> </AddReview>}> </Route>
          <Route path='orders' element={<MyOrders> </MyOrders>} />
          <Route path='products' element={<ManageProducts></ManageProducts>}> </Route>
          <Route path='addproduct' element={<AddProduct></AddProduct>}> </Route>
          <Route path='allorders' element={<ManageOrders></ManageOrders>}> </Route>

          <Route path='payment/:id' element={<Payment></Payment>}> </Route>
          
          <Route path='users' element={<Users> </Users>}> </Route>
        </Route>
        <Route path='/blogs' element={<Blogs></Blogs>}> </Route>
        <Route path='/portfolio' element={<MyPortfolio> </MyPortfolio>}> </Route>
        <Route path='/login' element={<Login> </Login>}> </Route>
        <Route path='/register' element={<Register> </Register>} > </Route>
        <Route path='*' element={ <NotFound> </NotFound>}> </Route>
      </Routes>
      <Footer> </Footer>

      <ToastContainer />
    </div>
  );
}

export default App;
