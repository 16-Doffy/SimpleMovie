import React from 'react';
import { Navigate } from 'react-router-dom';

const Button = ({onClick, className,type="button",full=false,  bgColor = "primary"}) => {
    let bgClassName = "bg-primary";
    switch(bgColor){
       case 'primary':
        bgClassName = "bg-primary";
        break;
        
        case 'secondary':
            bgClassName = "bg-secondary ";
            break;

        default:
            break;
    }
    return (
        <button
        type={type}
        onClick={onClick}
        className={`cursor-pointer py-3 px-6 rounded-lg capitalize bg-pink-500 text-2xl  mt-auto ${full ? "w-full" : ""} ${bgClassName} ${className}`}
      >
        Watch Now
      </button>
    );
};

export default Button;