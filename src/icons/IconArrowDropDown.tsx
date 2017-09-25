import * as React from "react";

interface IIconArrowDropDown {
  style?: {
    [key: string]: string;
  };
}

const IconArrowDropDown = (props: IIconArrowDropDown = {}) => {
  const style = props.style || {};

  return (
    <svg style={style} fill="#FFFFFF" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 10l5 5 5-5z" />
    </svg>
  );
};

export default IconArrowDropDown;
