import clsx from "clsx";
import React from "react";

const Input = ({
  type = "text",
  className,
  children,
  required,
  placeholder,
  ...rest
}) => {
  const classes = clsx(
    {
      input: true
    },
    className
  );

  return (
    <label className='label'>
      {placeholder}
      {required && <span className='input-required'>*</span>}
      <div>
        <input
          className={classes}
          type={type}
          placeholder={placeholder}
          required={required}
          {...rest}
        />
      </div>
    </label>
  );
};

export default Input;
