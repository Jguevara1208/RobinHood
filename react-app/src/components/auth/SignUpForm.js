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
  const theme = useSelector(state => state.theme);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(firstName, lastName, email, password));
      if (data) {
        setErrors(data)
      }
    } else {
      const data = ["Passwords: Passwords must match"]
      setErrors(data)
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
      <div className="sign-up-page">
        <div className="sign-up-form-container">
          <div className="sign-up-form-inner-container">
            <div className="sign-up-form-logo-container">
              <div className="sign-up-form-logo">
                <svg aria-label="Robinhood logo" height="35" role="img" viewBox="0 0 142 35" width="142" xmlns="http://www.w3.org/2000/svg" class="css-yciv80-RobinhoodLogotype"><path d="M34.6928 11.7521C33.3653 11.7521 31.9626 12.4033 31.086 13.4052H31.0359V7.11838H28.6063V25.4028H30.8355V24.1254H30.8856C31.7372 25.1023 33.2901 25.7785 34.6427 25.7785C38.1493 25.7785 40.4035 23.0233 40.4035 18.7653C40.4035 14.6325 38.0491 11.7521 34.6928 11.7521ZM34.267 23.5744C32.4385 23.5744 31.0359 22.322 31.0359 20.6689V17.1122C31.0359 15.3339 32.4385 13.9813 34.267 13.9813C36.6464 13.9813 37.9739 15.7096 37.9739 18.7653C37.9739 21.8461 36.6464 23.5744 34.267 23.5744Z"></path><path d="M20.7164 11.7521C17.1096 11.7521 14.63 14.6325 14.63 18.7653C14.63 22.9983 17.0345 25.7785 20.7164 25.7785C24.3483 25.7785 26.7278 22.9983 26.7278 18.7653C26.7278 14.6325 24.2731 11.7521 20.7164 11.7521ZM20.7164 23.5744C18.4371 23.5744 17.0345 21.7209 17.0345 18.7653C17.0345 15.8098 18.4371 13.9813 20.7164 13.9813C22.9206 13.9813 24.3232 15.8598 24.3232 18.7653C24.3232 21.6958 22.9206 23.5744 20.7164 23.5744Z"></path><path d="M13.5029 12.9544C13.5029 9.84851 11.1985 7.86979 7.59172 7.86979H0.728775V25.4028H3.2335V18.4647H6.81526C9.57045 18.4647 10.5723 19.5668 10.5723 22.6225V25.4028H13.0019V22.6225C13.0019 19.8248 12.1503 18.1616 10.2943 17.4779C12.1954 16.8116 13.5029 15.2437 13.5029 12.9544ZM7.39134 16.2355H3.2335V10.1491H7.3663C9.74578 10.1491 10.9731 11.176 10.9731 13.2048C10.9731 15.1585 9.72074 16.2355 7.39134 16.2355Z"></path><path d="M53.6534 11.7521C52.2508 11.7521 50.748 12.4284 50.0216 13.4052H49.9715V12.1278H47.5921V25.4028H50.0216V17.0621C50.0216 15.1836 51.2489 14.0063 53.1775 14.0063C55.0811 14.0063 55.9828 15.1084 55.9828 17.4127V25.4028H58.4374V16.7114C58.4374 13.6557 56.5839 11.7521 53.6534 11.7521Z"></path><path d="M93.278 11.7521C89.6711 11.7521 87.1914 14.6325 87.1914 18.7653C87.1914 22.9983 89.596 25.7785 93.278 25.7785C96.9099 25.7785 99.2894 22.9983 99.2894 18.7653C99.2894 14.6325 96.8348 11.7521 93.278 11.7521ZM93.278 23.5744C90.9987 23.5744 89.596 21.7209 89.596 18.7653C89.596 15.8098 90.9987 13.9813 93.278 13.9813C95.4822 13.9813 96.8849 15.8598 96.8849 18.7653C96.8849 21.6958 95.4822 23.5744 93.278 23.5744Z"></path><path d="M110.16 7.11838V13.4052H110.11C109.233 12.3783 107.856 11.7521 106.528 11.7521C103.172 11.7521 100.792 14.6826 100.792 18.7653C100.792 23.0233 103.047 25.7785 106.553 25.7785C107.906 25.7785 109.459 25.1023 110.31 24.1254H110.36V25.4028H112.59V7.11838H110.16ZM110.16 20.6689C110.16 22.322 108.757 23.5744 106.929 23.5744C104.549 23.5744 103.222 21.8461 103.222 18.7653C103.222 15.7096 104.549 13.9813 106.929 13.9813C108.757 13.9813 110.16 15.3339 110.16 17.1122V20.6689Z"></path><path d="M79.6775 11.7521C76.0707 11.7521 73.591 14.6325 73.591 18.7653C73.591 22.9983 75.9956 25.7785 79.6775 25.7785C83.3094 25.7785 85.6888 22.9983 85.6888 18.7653C85.6888 14.6325 83.2342 11.7521 79.6775 11.7521ZM79.6775 23.5744C77.3982 23.5744 75.9956 21.7209 75.9956 18.7653C75.9956 15.8098 77.3982 13.9813 79.6775 13.9813C81.8817 13.9813 83.2843 15.8598 83.2843 18.7653C83.2843 21.6958 81.8817 23.5744 79.6775 23.5744Z"></path><path d="M44.9371 7.11838H42.3071V9.69824H44.9371V7.11838Z"></path><path d="M67.104 11.7521C65.6261 11.7521 64.1233 12.4534 63.4219 13.4553H63.3718V7.11838H60.9422V25.4028H63.3718V17.0621C63.3718 15.2587 64.6743 14.0063 66.5279 14.0063C68.3563 14.0063 69.4083 15.2086 69.4083 17.2875V25.4028H71.838V16.6864C71.838 13.6557 70.0095 11.7521 67.104 11.7521Z"></path><path d="M44.837 12.1278H42.4073V25.4028H44.837V12.1278Z"></path><path d="M129.339 26.034L129.156 26.0942C127.979 26.4849 126.238 27.0885 124.675 27.8074C124.592 27.8475 124.537 27.9577 124.537 27.9577C124.507 28.0253 124.472 28.108 124.432 28.2006L124.427 28.2132C124.251 28.6114 124.011 29.21 123.906 29.4555L123.826 29.6484C123.813 29.6784 123.821 29.7135 123.846 29.736C123.861 29.7511 123.878 29.7586 123.898 29.7586C123.908 29.7586 123.921 29.7561 123.933 29.7511L124.121 29.6609C124.55 29.458 125.091 29.1499 125.657 28.8794L125.677 28.8694C126.756 28.3584 127.974 27.7798 128.707 27.4292C128.707 27.4292 128.825 27.3666 128.885 27.2488L129.434 26.1468C129.449 26.1192 129.444 26.0841 129.424 26.0591C129.404 26.034 129.369 26.024 129.339 26.034Z"></path><path d="M124.95 24.3258C125.028 24.1755 125.384 23.4892 125.464 23.3364L125.479 23.3089C127.863 18.8129 130.769 14.5699 134.113 10.7026L134.206 10.5949C134.233 10.5624 134.238 10.5123 134.218 10.4747C134.196 10.4346 134.153 10.4146 134.11 10.4196L133.97 10.4396C131.776 10.7427 129.554 11.161 127.365 11.6845C127.147 11.7446 127.007 11.8874 126.977 11.9199C125.339 13.8811 123.788 15.945 122.365 18.0615C122.295 18.1692 122.27 18.3095 122.288 18.4247C122.303 18.5374 122.646 21.1799 123.167 23.2087C121.875 26.9282 120.72 31.8299 120.72 31.8299C120.71 31.8625 120.717 31.8951 120.735 31.9226C120.755 31.9502 120.785 31.9652 120.82 31.9652H121.556C121.604 31.9652 121.644 31.9376 121.662 31.895L121.712 31.7573C122.463 29.7084 123.32 27.6846 124.267 25.7109C124.487 25.255 124.95 24.3258 124.95 24.3258Z"></path><path d="M135.192 11.5091L135.189 11.3689C135.187 11.3238 135.159 11.2862 135.119 11.2712C135.079 11.2562 135.032 11.2687 135.002 11.3013L134.909 11.4065C131.009 15.9175 127.73 20.9219 125.166 26.2845L125.106 26.4097C125.086 26.4498 125.093 26.4974 125.123 26.5299C125.143 26.55 125.171 26.5625 125.198 26.5625C125.211 26.5625 125.226 26.56 125.241 26.555L125.369 26.5024C127.56 25.5957 129.797 24.8092 132.018 24.1655C132.151 24.1279 132.264 24.0327 132.327 23.91C133.301 22.0114 135.563 18.3345 135.563 18.3345C135.62 18.2518 135.605 18.1291 135.605 18.1291C135.605 18.1291 135.217 13.7333 135.192 11.5091Z"></path><path d="M140.236 5.1672C139.683 4.6863 138.879 4.46087 137.632 4.43332C136.499 4.40827 135.154 4.65374 133.629 5.15468C133.401 5.23483 133.218 5.36257 133.056 5.52037C131.505 6.97561 129.997 8.52102 128.572 10.114L128.462 10.2342C128.432 10.2693 128.427 10.3194 128.449 10.357C128.472 10.3971 128.52 10.4171 128.565 10.4071L128.725 10.372C131.022 9.88108 133.341 9.50537 135.618 9.25741C135.768 9.23987 135.923 9.28997 136.034 9.39266C136.146 9.49535 136.209 9.64313 136.206 9.79592C136.169 12.0552 136.251 14.3245 136.452 16.5411L136.464 16.6864C136.469 16.7315 136.499 16.7666 136.545 16.7791C136.552 16.7816 136.56 16.7816 136.57 16.7841C136.602 16.7841 136.637 16.7691 136.66 16.739L136.742 16.6213C138.025 14.7928 139.42 13.0145 140.888 11.3313C141.053 11.1435 141.096 11.0257 141.126 10.8554C141.586 7.90486 140.873 5.72075 140.236 5.1672Z"></path></svg>
              </div>
            </div>
            <div className="sign-up-top-elements">
              <div class="sign-up-top-main-title-container">
                <span class="sign-up-top-main-title">Make Your Money Move</span>
              </div>
              <div className="sign-up-top-message-outer-container">
                <div className="sign-up-top-message-inner-container">
                  <span className="sign-up-top-message">Robinhood lets you invest in companies you love, commission-free.</span>
                </div>
              </div>
            </div>
            <div>
              <div className="sign-up-directions-container">
                <span class="sign-up-directions">Please enter your full legal name. Your legal name should match any form of government ID.</span>
              </div>
              <form className="sign-up-form" onSubmit={onSignUp}>
                <div className="sign-up-first-last">
                  <div className="sign-up-first-name-container">
                    <input className="sign-up-first-name-input"
                      type='text'
                      name='first-name'
                      placeholder='First Name'
                      onChange={updateFirstName}
                      value={firstName}
                    ></input>
                  </div>
                  <div className="sign-up-last-name-container">
                    <input className="sign-up-last-name-input"
                      type='text'
                      name='last-name'
                      placeholder='Last Name'
                      onChange={updateLastName}
                      value={lastName}
                    ></input>
                  </div>
                </div>
                <div className="sign-up-form-email-container">
                  <div className="sign-up-form-email">
                    <input
                      className="sign-up-email-input"
                      type='text'
                      name='email'
                      placeholder='Email'
                      onChange={updateEmail}
                      value={email}
                    ></input>
                  </div>
                </div>
                <div className="sign-up-form-password-container">
                  <div className="sign-up-form-password">
                    <input
                      className="sign-up-password-input"
                      type='password'
                      name='password'
                      placeholder='Password'
                      onChange={updatePassword}
                      value={password}
                    ></input>
                  </div>
                </div>
                <div className="sign-up-form-confirm-password-container">
                  <div className="sign-up-form-confirm-password">
                    <input
                      className="sign-up-confirm-password-input"
                      type='password'
                      name='repeat_password'
                      placeholder='Repeat Password'
                      onChange={updateRepeatPassword}
                      value={repeatPassword}
                      required={true}
                    ></input>
                  </div>
                </div>
                <div className="sign-up-form-button-outer-container">
                  <div className="sign-up-form-button-inner-container">
                    <div className={`${theme} sign-up-form-button-container`}>
                      <button className={`${theme} sign-up-form-button`} type='submit'>
                        <span className="sign-up-form-button-inner-container">
                          <span className="sign-up-form-button-inner">
                            <span class="sign-up-form-button-label">Continue</span>
                          </span>
                        </span>
                      </button>
                    </div>
                    <div className="already-started-container">
                      <span className="already-started-text">Already started?</span>
                      <br></br>
                      <span className="already-started-text">
                        <a rel href='/login' className="already-started-link">Log in to complete your application</a>
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  {errors.map((error, ind) => (
                    <div key={ind}>{error}</div>
                  ))}
                </div>
              </form>
            </div>
            <div className="sign-up-disclosure-outer-container">
              <div className="sign-up-disclosure-middle-container">
                <div className="sign-up-disclosure-inner-container">
                  <div className="sign-up-disclosure-container">
                    <div className="sign-up-disclosure-statements">
                      All investments involve risk, including the possible loss of principal.
                      Investors should consider their investment objectives and risks carefully before investing.
                    </div>
                    <div className="sign-up-disclosure-statements">
                      Commission-free trading means $0 commission trading on self-directed individual cash or
                      margin brokerage accounts that trade U.S. listed securities via mobile devices or web.
                      Keep in mind, other fees such as trading (non-commission) fees, Gold subscription fees,
                      wire transfer fees, and paper statement fees may apply to your brokerage account.
                      Please see Robinhood Financial’s fee schedule to learn more.
                    </div>
                    <div className="sign-up-disclosure-statements">
                      Securities trading offered through Robinhood Financial LLC.
                      Brokerage clearing services offered through Robinhood Securities, LLC.
                      Both are subsidiaries of Robinhood Markets, Inc.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sign-up-sidebar">
          <div className="sign-up-sidebar-elements">
            <div className="sign-up-sidebar-element1">
              <span className="sign-up-sidebar-style1">Commission-free trading</span>
            </div>
            <div>
              <span className="sign-up-sidebar-style2">Break free from commission-fees and make unlimited commission-free trades in stocks, funds,
                and options with Robinhood Financial. Other fees may apply. View our fee schedule to learn more.</span>
            </div>
            <div className="sign-up-sidebar-element2">
              <span className="sign-up-sidebar-style1">Account Protection</span>
            </div>
            <div>
              <span className="sign-up-sidebar-style2">Robinhood Financial is a member of SIPC. Securities in your account protected up to $500,000.
                For details, please see www.sipc.org.</span>
            </div>
            <div className="sign-up-sidebar-element2">
              <span className="sign-up-sidebar-style1">Stay on top of your portfolio</span>
            </div>
            <div>
              <span className="sign-up-sidebar-style2">Set up customized news and notifications to stay on top of your assets as casually or as
                relentlessly as you like. Controlling the flow of info is up to you.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
