import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './page/Header/Navbar';
import Home from './page/Home/Home';
import Footer from './page/Shared/Footer';


function App() {
  return (
    <div>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}>  </Route>
          <Route path='/home' element={<Home></Home>}>  </Route>
        </Routes>
        <Footer> </Footer>
    </div>
  );
}

export default App;
