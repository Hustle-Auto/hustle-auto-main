const Error = (props) => {
  return (
    <>
      <svg
        viewBox="0 0 35 35"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M0 17.5C0 27.165 7.83502 35 17.5 35C27.165 35 35 27.165 35 17.5C35 7.83502 27.165 0 17.5 0C7.83502 0 0 7.83502 0 17.5Z"
          fill="currentColor"
          fillOpacity="1"
        />
        <path
          d="M23.8002 11.1997L11.2002 23.7997"
          stroke="white"
          strokeOpacity="1"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M23.8002 23.7997L11.2002 11.1997"
          stroke="white"
          strokeOpacity="1"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};

export default Error;
