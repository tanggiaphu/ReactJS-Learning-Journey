import React, { useState, useEffect, useReducer, useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import AuthContext from '../../store/AuthContext';

const emailReducer = function (state, action) {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes('@') }
  }

  if (action.type === 'INPUT_BLUR') {
    console.log(state)
    return { value: state.value, isValid: state.value.includes('@') }
  }
}

const passwordReducer = function (state, action) {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 6 }
  }

  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 6 }
  }
}

const Login = (props) => {
  const cxt = useContext(AuthContext)

  const [email, dispatchEmail] = useReducer(emailReducer, { value: '', isValid: null })
  const [password, dispatchPassword] = useReducer(passwordReducer, { value: '', isValid: null })

  const [formIsValid, setFormIsValid] = useState(false);

  const { value: emailValue, isValid: emailValidity } = email
  const { value: passwordValue, isValid: passwordValidity } = password

  useEffect(() => {
    const timer = setTimeout(() => {
      setFormIsValid(
        email.isValid && password.isValid
      );
    }, 1000);

    return () => {
      clearTimeout(timer)
    }
  }, [email.isValid, password.isValid])

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value })
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value })
  };

  // Check if email and password are valid when leave the input form
  const validateEmailHandler = () => {
    dispatchEmail({ type: 'INPUT_BLUR' })
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'INPUT_BLUR' })
  };

  const submitHandler = (event) => {
    event.preventDefault();
    cxt.onLogin(email.value, password.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          type="email"
          id="email"
          value={emailValue}
          validity={emailValidity}
          labelContent="E-Mail"
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler} />

        <Input
          type="password"
          id="password"
          value={passwordValue}
          validity={passwordValidity}
          labelContent="Password"
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler} />

        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;