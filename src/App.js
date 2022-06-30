
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
  // let name = "Ibrahim"
  // let sayMorning=()=>" Good morning"
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Hi! I am {name}
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React {sayMorning()}
  //       </a>        
  //       <Home username= {name}/>
  //     </header>
  //   </div>
  // );
}

export default App;
