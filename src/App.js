
import './App.css';
import UserCard from './components/UserCard';
import users from './users';
function App() {
   
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
