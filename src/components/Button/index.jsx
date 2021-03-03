import React from 'react';

import './style.scss';

const Button = (props) => {
    const {
        children,
        className,
        type,
        onClick,
    } = props
  return (
    <button 
        type={type} 
        className={`componentBtn ${className}`}
        onClick={onClick}
    >
        {children}
    </button>
  )
} 
export default Button
