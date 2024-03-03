import './App.css';
import { useParams } from "react-router-dom";
function User(){
    const params=useParams();
    const {name}=params;
    return<>
    <h1>this is {name}</h1>
    </>
}
export default User;