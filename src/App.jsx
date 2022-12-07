import './App.css';
import mtnImg from './images/test.jpg';

function App() {
  return (
    <div className="main-container">
      <div className="login-container">
          <div className="img-container">
            <img src={mtnImg} alt="Mountain image, taken by Guilherme Rossi from Pexels.com"/>
          </div>
          <div className="info-container">
            <div className="headline-container">
              <h1>Welcome to this application</h1>
              <h2>Login to use platform</h2>
            </div>

            <div className="user-container">
              <div className="input-container">
                <label for='username'>Username</label>
                <input type="text" className='user-input' id='username' />
              </div>

              <div className="input-container">
                <label for='password'>Password</label>
                <input type="password" className='user-input' id='password' />
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default App
