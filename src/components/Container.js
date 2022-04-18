import React from "react";
import HiddenContainer from "./HiddenContainer";

const Container = () => {
  const buttonClick = false;

  //Container for diplaying data from spacex-api
  return (
    <div>
      <div className="title">Title | Status</div>
      {buttonClick ? <HiddenContainer /> : null}
      <button>{!buttonClick ? "VIEW" : "HIDE"}</button>
    </div>
  );
};
export default Container;
