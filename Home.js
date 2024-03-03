
import './App.css';
function Home(){
    return(
        <div className='navbar3'> 
        <p className='p4'><b>Dashboard</b></p>
        <div className='box'>
         <p className='p5'>Dashboard</p>
        </div>
       
        <div className='box1'>
         <div className='nav'><img className="images1" src="group.png"/></div>
         <p className='p6'>Total Students</p>
         <p className='p7'>450</p>
         <div class="progress"> 
         <div class="progress__bar"></div>
          </div>
         <p className='p8'>45% Increase in 28 Days</p>
        </div>
        <div className='box2'>
        <div className='nav'><img className="images2" src="user.png"/></div>
         <p className='p6'>New Students</p>
         <p className='p7'>155</p>
         <div class="progress1"> 
         <div class="progress__bar1"></div>
          </div>
         <p className='p8'>40% Increase in 28 Days</p>
     </div>
     <div className='box3'>
     <div className='nav'><img className="images2" src="learning.png"/></div>
         <p className='p6'>Total Courses</p>
         <p className='p7'>52</p>
         <div class="progress2"> 
         <div class="progress__bar2"></div>
          </div>
         <p className='p8'>85% Increase in 28 Days</p>
     </div>
     <div className='box4'>
     <div className='nav'><img className="images2" src="hand.png"/></div>
         <p className='p6'>Fees Collection</p>
         <p className='p7'>13,921$</p>
         <div class="progress3"> 
         <div class="progress__bar3"></div>
          </div>
         <p className='p8'>50% Increase in 28 Days</p>
     </div>
     <div className='graph' >
       <p>University Servey</p>
       <img  src="images2.png"/>
       <ul className='list2'>
         <li>40</li>
         <li>37</li>
         <li>33</li>
         <li>30</li>
         <li>26</li>
         <li>23</li>
         <li>19</li>
         <li>16</li>
         <li>12</li>
         <li>9</li>
         <li>5</li>
       </ul>
       <ul className="list3">
                     <li>Jan</li>
                     <li>Feb</li>
                     <li>Mar</li>
                     <li>Apr</li>
                     <li>May</li>
                     <li>Jun</li>
                     <li>July</li>
                     <li>Aug</li>
                     <li>Sep</li>
                 </ul>
     </div>
     <div className='graph1' >
       <p>University Servey</p>
       <img  src="images3.png"/>
       <ul className='list4'>
         <li>100</li>
         <li>80</li>
         <li>60</li>
         <li>40</li>
         <li>20</li>
         <li>0</li>
       </ul>
       <ul className="list5">
                     <li>Jan</li>
                     <li>Feb</li>
                     <li>Mar</li>
                     <li>Apr</li>
                     <li>May</li>
                     <li>Jun</li>
                     <li>July</li>
                 </ul>
     </div>
       <div className='Data'>
       <p className='p9'>Teachers list</p>
       <table className="teacher-table-list">
       <tr className='t1'>
         <th>#</th>
         <th>Name</th>
         <th>Department</th>
         <th>Email</th>
         <th>Class Name</th>
         <th>Subject</th>
         <th>Rating</th>
         <th>Action</th>
       </tr>
         </table>
       </div>
     </div>
 );
}
export default Home;