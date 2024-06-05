import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/pacientes');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src="/logoff.jpg" alt="Logo" />
        <div>
          <label>Usuário:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
        </div>
        <div>
          <label>Senha:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
        </div>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
