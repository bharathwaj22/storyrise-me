import React from "react";

function Cards() {
  return (
    <>
      <div className=" container mt-5 ">
        <div className="wrapper-card">
          <div className="yellow-col bg-blue">
          <span class="rotated-text">Try</span>

          </div>
          <div className="yellow-col bg-red">
          <span class="rotated-text">Some</span>
          </div>
          <div className="yellow-col bg-green">
          <span class="rotated-text">THINK</span>
          </div>
          <div className="yellow-col bg-yellow">
          <span class="rotated-text">New</span>
          </div>

        </div>
      </div>
    </>
  );
}

export default Cards;
