import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './page/Header/Navbar';
import Home from './page/Home/Home';
import Login from './page/Login/Login';
import Register from './page/Login/Register';
import Footer from './page/Shared/Footer';


function App() {
  return (
    <div>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}>  </Route>
          <Route path='/home' element={<Home></Home>}>  </Route>
          <Route path='/login' element={<Login> </Login>}> </Route>
          <Route path='/register' element={<Register> </Register>} > </Route>
        </Routes>
        <Footer> </Footer>
    </div>
  );
}

export default App;
