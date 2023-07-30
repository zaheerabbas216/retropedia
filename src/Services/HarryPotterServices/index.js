import React from "react";
import axios from "axios";

export const GetAllHPCharecters = async () => {
  let res = axios.get("https://hp-api.onrender.com/api/characters");
  return res;
};
