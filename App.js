import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Nav from './Nav';
import E404 from './E404';
import User from './User';
import Login from './Log';
import Topnavbar from './Topnavbar';
import Register from './Register';
import App2 from './App2'
function App() {
  return(
  <div>
     <BrowserRouter>
      <Nav/>
      <Topnavbar/>
      <Routes>
      <Route path="/Home" element={<Home/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
        <Route path="/*" element={<E404/>}></Route>
        <Route path="/User/:name" element={<User/>}></Route>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/Register" element={<Register/>}></Route>
        <Route path="/App2" element={<App2/>}></Route>
      </Routes>
      </BrowserRouter>
      
  </div>
  );
}

export default App;
