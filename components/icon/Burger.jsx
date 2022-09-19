import React from "react";

const Burger = (props) => {
  return (
    <svg
      // default className, can be overwritten in props
      className="w-20 h-20"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
};

export default Burger;
