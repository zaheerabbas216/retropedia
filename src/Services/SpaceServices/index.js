import React from "react";
import axios from "axios";

export const GetAllArticlesService = async () => {
  let res = await axios.get("https://api.spaceflightnewsapi.net/v4/articles/");
  return res;
};

export const GetAllSpaceBlogsService = async () => {
  let res = await axios.get("https://api.spaceflightnewsapi.net/v4/blogs");
  return res;
};

export const GetAllSpcaeReports = async () => {
  let res = await axios.get("https://api.spaceflightnewsapi.net/v4/reports");
  return res;
};


