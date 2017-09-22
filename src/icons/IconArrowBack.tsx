import * as React from "react";

interface IIconArrowBack {
  padding?: string;
}

const IconArrowBack = (props: IIconArrowBack) => {
  const padding: string = props.padding || "";
  return (
    <svg fill="#888888" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
    </svg>
  );
};

export default IconArrowBack;
