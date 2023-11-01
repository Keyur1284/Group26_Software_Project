import React from "react";
import main_bg from "../assets/project-dashboard/main-bg.jpg";
import FadeLoader from "react-spinners/FadeLoader";

export const Loading = () => {
  return (
    <div
      className="container-fluid px-3 py-3"
      style={{ backgroundImage: `url(${main_bg})`, backgroundRepeat: "repeat" }}
    >
      <div className="mt-5 px-5 py-5" style={{ minHeight: "92vh" }}>
        <div className="m-5 p-5 d-flex justify-content-evenly">
          <div className="row">
            <div className="m-2 p-2 d-flex justify-content-center">
              <FadeLoader
                height={25}
                width={7}
                radius={5}
                margin={5}
                color={"#0b0b0b"}
                loading={true}
              />
            </div>
            <div className="m-3 p-3 d-flex justify-content-center display-2    ">
              Your Page is Loading.....
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
