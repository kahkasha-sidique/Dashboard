import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Home from './Home';
import './App.css'

function Nav() {
  function closeNav(){
document.getElementById('nav-bar').style.display="none";
document.getElementById('main').style.marginLeft="0px";
  }
  function openNav()
	{
		document.getElementById('nav-bar').style.display="block";
		document.getElementById('main').style.marginLeft="165px";

	}
  return (
   <div>
    
    <div className="navbar" id="nav-bar">
    <div className="head" >
    <img className='logo' src='house.png'/>
        <h2 className='smart'>Smart</h2>
        <a  href="javascript:void(0)" className='closebtn' onClick={closeNav}>&times;</a>
      <img className='girl' src='girl.png'/>
        <p className="p">Kahkasha</p>
        <p className='p1'>Administrator</p>
      
    </div> 
    <div class="list">	
       <ul>
           <Link className='a' to="/Home"><li><img src='dashboard.png'/>Dashboard</li></Link>
           <Link className='a' to="/Home"><li><img src='unread.png'/>Event</li></Link>
           <Link className='a' to="/Home"><li><img src='user.png'/>Professors</li></Link>
           <Link className='a' to="/Home"><li><img src='group.png'/>Students</li></Link>
           <Link className='a' to="/App2"><li><img src='online-graduation.png'/>Courses</li></Link>
           <Link className='a' to="/Home"><li><img src='book.png'/>Library</li></Link>
           <Link className='a' to="/Home"><li><img src='briefcase.png'/>Department</li></Link>
           <Link className='a' to="/Home"><li><img src='happiness.png'/>Staff</li></Link>
           <Link className='a' to="/Home"><li><img src='coffee-cup.png'/>Holiday</li></Link>
       </ul>
  </div>  
  </div>
  <a  href="javascript:void(0)" id="main" className="menu" onClick={openNav}>&#9776;</a>
 </div> 
  );
}

export default Nav;