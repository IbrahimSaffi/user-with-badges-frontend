import { useEffect, useState } from 'react';
import UserCard from './components/UserCard';
function App() {
  const [users,setUsers] = useState([])
   useEffect(()=>{
    fetch("https://user-badges-backend.onrender.com")
    .then(res=>res.json())
    .then(data=>{setUsers(data.users)
    })
    .catch(err=>console.log(err))
   },[])
     return (
      <div>
        <h1>Users at acme Inc.</h1>
        <div className="card-container">
      {users.map(user=> <UserCard user = {user}/>)}
        </div>
      </div>
     )
}

export default App;
