import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import { Routes, Route } from 'react-router-dom'
import Home from './component/Home/Home';
import Registrasion from './component/Registrasion/Registrasion';
import Login from './Login/Login';
import Service from './component/Service/Service';
import RequireAuth from './component/Require/RequireAuth';
import Product from './component/Product/Product';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/registration' element={<Registrasion></Registrasion>}></Route>
        <Route path='/product' element={<RequireAuth>
          <Product></Product>
        </RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/service' element={<RequireAuth>
          <Service></Service>
        </RequireAuth>}></Route>
      </Routes>
    </div>
  );
}

export default App;
