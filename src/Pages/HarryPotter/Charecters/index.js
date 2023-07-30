import React, { useState, useEffect } from "react";
import { GetAllHPCharecters } from "../../../Services/HarryPotterServices";
import "./styles.scss"

export const HPCharecteres = () => {
  const [charecteres, setCharecteres] = useState([]);

  const getAllHPCharecters = async () => {
    let res = await GetAllHPCharecters();
    setCharecteres(res.data);
    // console.log("res", res);
  };

  useEffect(() => {
    getAllHPCharecters();
  }, []);


  return (
    <div>
      <div className="w-100 text-center">
        <h2>Charecters</h2>
      </div>

      <div className="charectersDiv">
        <div className="row">
          {charecteres.map((charecter) => {
            return (
              <div className="col-md-3 mb-2">
                <div className="card p-2">
                  <img src={charecter.image} alt="" className="charImage" />
                  <h3 className="mb-0">{charecter.name}</h3>
                  <p className="mb-0">Played by : {charecter.actor}</p>
                  <p className="mb-0">House : {charecter.house}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
