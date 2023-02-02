import React from 'react';
import { useState } from 'react';
import './style.css';

const Input = ({ label, onChange, errorMessage, ...otherProps}) => {
    const [focuse, setFocuse] = useState(false);
  return (
    <div className='inputField'>
        <label>{label} </label>
        <input {...otherProps} onChange={onChange} 
        onBlur={() => setFocuse(true)} 
        onFocus={() => otherProps.name === "confirmPassword" && setFocuse(true)} 
        focused={focuse.toString()} />
          <span>{errorMessage} </span>
    </div>
  );
};

export default Input;
