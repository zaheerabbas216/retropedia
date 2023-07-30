import React from "react";
import { Images } from "../../../Assets/imagesStrings";

export const HPHome = () => {
  return (
    <div>
      <div className="w-100 text-center">
        <h2>Select Categories </h2>
      </div>

      <div className="categoriesDiv">
        <div className="row">
          <div className="col-md-3">
            <div className="_category">
              <img src={Images.folder} alt="" className="folderimg" />
              <h5>Categories</h5>
            </div>
          </div>
          <div className="col-md-3">
            <div className="_category">
              <img src={Images.folder} alt="" className="folderimg" />
              <h5>Spells</h5>
            </div>
          </div>
          <div className="col-md-3">
            <div className="_category">
              <img src={Images.folder} alt="" className="folderimg" />
              <h5>Houses</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
