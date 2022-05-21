import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './page/Header/Navbar';
import Home from './page/Home/Home';


function App() {
  return (
    <div>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}>  </Route>
          <Route path='/home' element={<Home></Home>}>  </Route>
        </Routes>
    </div>
  );
}

export default App;
