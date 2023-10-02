import React from "react";
import Button from "./Button";

const buttonList = [
  "All",
  "Sports",
  "Music",
  "Live",
  "Gaming",
  "Songs",
  "Cricket",
  "Soccer",
];

function ButtonList() {
  return (
    <div>
      {buttonList.map((button) => (
        <Button key={button} name={button} />
      ))}
    </div>
  );
}

export default ButtonList;
