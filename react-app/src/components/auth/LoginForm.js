import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import './LoginForm.css';

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.id);
  const theme = useSelector(state => state.theme);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));

    if (data) {
      setErrors(data);
    }
  };

  // set the email and password to the demo user

  const onDemoLogin = async (e) => {
    const demoEmail = 'test@test.com'
    const demoPassword = 'password'
    const data = await dispatch(login(demoEmail, demoPassword));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div class= "page-container">
      <img class="log-in-logo" src="https://cdn.robinhood.com/assets/generated_assets/632fcb3e7ed928b2a960f3e003d10b44.jpg" alt="Robin Hood" />
      <div className="log-in-form-container">
        <form className="log-in-form" onSubmit={onLogin}>
          <div className="log-in-form-elements">
            <h2>Welcome to Robinhood</h2>
            <div className="log-in-form-username">
              <label htmlFor='email'>Email</label>
              <input
                name='email'
                type='text'
                placeholder='Email'
                value={email}
                onChange={updateEmail}
                required
              />
            </div>
            <div className="log-in-form-password">
              <label htmlFor='password'>Password</label>
              <input
                name='password'
                type='password'
                placeholder='Password'
                value={password}
                onChange={updatePassword}
                required
              />
            </div>

            <div className="log-in-form-submit">
              <button className={`${theme} log-in-form-button`}type='submit'>Sign In</button>
            </div>
            <div className="demo-user-button-container">
              <button className={`${theme} demo-user-button`} onClick={() => {
                onDemoLogin();
                }}>Demo User
              </button>
            </div>
          </div>
        </form>
        {errors.length > 0 && <div className="error-message">Unable to log in with provided credentials.</div>}
      </div>
    </div>
  );
};

export default LoginForm;
