import './App.css';
import deviceLogo from './assets/device.svg';

function App() {
  return (
    <div className="main-container">
      <div className="login-container">
        <div className="header-container">
          <img src={deviceLogo} className='svg-icon' alt='Device Logo'/>
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
          <div className="button-container">
            <button>Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
