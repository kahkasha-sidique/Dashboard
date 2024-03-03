import './Register.css';
function Register(){
    function close(){
window.location = "/";
    }

    return(
        <div className='body1' id="overlay">  
     <div className="login1">
        <span className='close-btn'  onClick={close} >X</span>
     <h2 className="xyz1">Registration</h2>
        <div className="border1">
        <img className='person' src="user.png"/>
        <input className="name1" type="text" id="first" placeholder="Enter your name"/><br></br>
        <img className='email' src="unread.png"/>
        <input className="email1" type="text"  id="sec"  placeholder="Enter your email"/><br></br>
        <img  className="lock" src="lock.png"/>
        <input className="password1" type="password" id="third" placeholder="Create a Password"/><br></br>
        <img  className="lock1" src="lock.png"/>
        <input className="password2" type="password"  id="fourth"  placeholder=" Confirm a Password"/><br></br>
        <button className='button1'>Register Now</button>
        </div>
     </div>
          </div>
    );
}
export default Register;