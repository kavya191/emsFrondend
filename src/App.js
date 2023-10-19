import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import Footer from './Components/Footer';
import Header from './Components/Header';
import AdminHome from './Pages/AdminHome';
import Add from './Pages/Add';
import Manage from './Pages/Manage'
import Pnf from './Pages/Pnf';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>

        <Route path='/' element={<Login />}></Route>
        <Route path='/adminHome' element={<AdminHome />}></Route>
        <Route path='/add' element={<Add/>}></Route>
        <Route path='/manage'element={<Manage/>}></Route>
        <Route path='*' element={<Pnf/>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
