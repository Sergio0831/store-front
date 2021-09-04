import clsx from "clsx";
import React from "react";

const Button = ({ children, className, outline, ...rest }) => {
  const classes = clsx(
    {
      btn: true,
      "btn-outline": outline,
      "btn-default": !outline
    },
    className
  );

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;
