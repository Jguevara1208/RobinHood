import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import './SignUpForm.css';

const SignUpForm = () => {
  const user = useSelector(state => state.session.id);

  const [errors, setErrors] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  console.log("User: ", user)
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(firstName, lastName, email, password));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  }

  const updateLastName = (e) => {
    setLastName(e.target.value)
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className="sign-up-page-container">
      <div className="sign-up-form-container">
          <h1>Make Your Money Move</h1>
          <h2>Robinhood lets you invest in companies you love, commission-free.</h2>
          <h3>Please enter your full legal name. Your legal name should match any form of government ID.</h3>
          <form className="sign-up-form" onSubmit={onSignUp}>
            <div>
              {errors.map((error, ind) => (
                <div key={ind}>{error}</div>
              ))}
            </div>
            <div className="sign-up-first-last">
              <div className="sign-up-first-name">
                <input
                  type='text'
                  name='first-name'
                  placeholder='First Name'
                  onChange={updateFirstName}
                  value={firstName}
                ></input>
              </div>
              <div className="sign-up-last-name">
                <input
                  type='text'
                  name='last-name'
                  placeholder='Last Name'
                  onChange={updateLastName}
                  value={lastName}
                ></input>
              </div>
            </div>
            <div className="sign-up-form-elements">
              <div className="sign-up-form-email">
                <input
                  type='text'
                  name='email'
                  placeholder='Email'
                  onChange={updateEmail}
                  value={email}
                ></input>
              </div>
              <div className="sign-up-form-password">
                <input
                  type='password'
                  name='password'
                  placeholder='Password'
                  onChange={updatePassword}
                  value={password}
                ></input>
              </div>
              <div className="sign-up-form-confirm-password">
                <input
                  type='password'
                  name='repeat_password'
                  placeholder='Repeat Password'
                  onChange={updateRepeatPassword}
                  value={repeatPassword}
                  required={true}
                ></input>
              </div>
            </div>
            <div className="sign-up-form-submit">
            <button type='submit'>Continue</button>
            </div>
          </form>
          <div className="sign-up-disclosure">
            <p>
              All investments involve risk, including the possible loss of principal.
              Investors should consider their investment objectives and risks carefully before investing.
            </p>
            <p>
              Commission-free trading means $0 commission trading on self-directed individual cash or
              margin brokerage accounts that trade U.S. listed securities via mobile devices or web.
              Keep in mind, other fees such as trading (non-commission) fees, Gold subscription fees,
              wire transfer fees, and paper statement fees may apply to your brokerage account.
              Please see Robinhood Financial’s fee schedule to learn more.
            </p>
            <p>
              Securities trading offered through Robinhood Financial LLC.
              Brokerage clearing services offered through Robinhood Securities, LLC.
              Both are subsidiaries of Robinhood Markets, Inc.
            </p>
            <a href="https://brokercheck.finra.org/">Check the background of Robinhood Financial LLC and Robinhood Securities, LLC on FINRA’s BrokerCheck.</a>
            <div>
              <a href="https://cdn.robinhood.com/assets/robinhood/legal/Robinhood%20Terms%20and%20Conditions.pdf">Robinhood Terms & Conditions</a>
              <span> | </span>
              <a href="https://robinhood.com/us/en/about/legal/">Disclosure Library</a>
              <span> | </span>
              <a href="https://robinhood.com/contact">Contact Us</a>
              <span> | </span>
              <a href="https://robinhood.com/us/en/support/">FAQ</a>
            </div>
          </div>
      </div>
      <div className="sign-up-sidebar">
        <label>Commission-free trading</label>
        <p>Break free from commission-fees and make unlimited commission-free trades in stocks, funds,
          and options with Robinhood Financial. Other fees may apply. View our fee schedule to learn more.</p>
        <label>Account Protection</label>
        <p>Robinhood Financial is a member of SIPC. Securities in your account protected up to $500,000.
          For details, please see www.sipc.org.</p>
        <label>Stay on top of your portfolio</label>
        <p>Set up customized news and notifications to stay on top of your assets as casually or as
          relentlessly as you like. Controlling the flow of info is up to you.</p>
      </div>
    </div>
  );
};

export default SignUpForm;
