
import './App.css';
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import Login from "./components/Login";
import Detail from "./components/Detail";
import Error from "./components/Error";
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Header/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/detail' element={<Detail/>}/>

      </Routes>
      
     
    </>
  );
}

export default App;
