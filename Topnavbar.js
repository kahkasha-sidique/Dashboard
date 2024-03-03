import './App.css';
function Topnavbar(){
  function view(){
    document.getElementById('shop-addtocart').style.display='none'
  }
    return(
        <div className="navbar2">
      <div className='navigation'>
      <input type="search" name="" placeholder='search'/>
      <img className="mic" src="search.png "/>
      </div>
      <img className="more" src="more.png"/>
      <img className='girl1' src='girl.png'/>
      <p className='p2'>Sneha</p>
      <a href="#" className="notification">
       <img className='unread' src="unread.png"/>
       <span className="badge"><center>3</center></span>
       </a>
       <a href="#" className="notification1">
       <img className='unread1' src="bell.png"/>
       <span className="badge1"><center>6</center></span>
       </a>
       <img className='india' src="india.png"/>
       <p className='p3'>English</p>
      <img  id="box" onClick={view} src="shopping-cart.png"/>
  </div>
  
    );
}




export default Topnavbar; 