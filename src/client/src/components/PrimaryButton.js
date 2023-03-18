import React from "react";


export default function PrimaryButton(props) {

  return (
    <button
      className={`btn btn-primary`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
    <svg className="stroke-current text-cyan group-hover:text-white" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect opacity="0.1" width="48" height="48" fill="black"/>
      <path d="M16 26L24 30L32 26" stroke="#currentcolor"/>
      <path opacity="0.5" d="M16 22L24 26L32 22" stroke="#currentcolor"/>
      <path opacity="0.25" d="M16 18L24 22L32 18" stroke="#currentcolor"/>
    </svg>

    {/* <svg className="stroke-current text-white hover:stroke-current hover:text-white -mt-1" stroke="currentColor" width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 9L9 13L17 9" stroke="white"/>
    <path opacity="0.5" d="M1 5L9 9L17 5" stroke="white"/>
    <path opacity="0.25" d="M1 1L9 5L17 1" stroke="white"/>
    </svg> */}

      <p className="">{props.children}</p>
    </button>
  );
}
