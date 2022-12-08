import './App.css';
import mtnImg from './images/test.jpg';

function App() {
  return (
    <div className="main-container">
      <div className="login-container">
        <div className="header-container">
          <h1>Login</h1>
        </div>

        <div className="user-container">
          <div className="input-container">
            <label for='username'>Username</label>
            <input type='text' className='input' id='username'></input>
          </div>
          <div className="input-container">
            <label for='password'>Password</label>
            <input type='password' className='input' id='password'></input>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
