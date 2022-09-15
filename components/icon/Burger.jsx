import React from "react";

const Burger = (props) => {
  if (props.isNavOpen) {
    return (
      <svg
        className="w-10 h-10 ml-8"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path d="M6 18L18 6M6 6l12 12" />
      </svg>
    );
  }
  if (!props.isNavOpen) {
    return (
      <svg
        className="block w-10 h-10"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    );
  }
};

export default Burger;
