import React from "react";
import { Route, Routes } from "react-router-dom";
import { RouteStrings } from "./RouteStrings";
import { HomePage } from "../Pages/HomePage";
import { Navbar } from "../Components/Navbar";
import { SubNavBar } from "../Components/SubNavBar";
import { Space } from "../Pages/Space";
import { About } from "../Pages/Space/About";
import { HPCharecteres } from "../Pages/HarryPotter/Charecters";

import "./styles.scss";
import { SpaceArticlesPage } from "../Pages/Space/Articles/SpaceArticlesPage";
import { HPHome } from "../Pages/HarryPotter/Home";

export const MainRoutes = () => {
  return (
    <>
      <div className="card rounded-0">
        <Navbar />
        <SubNavBar />
      </div>

      <div className="card _card m-5">
        <Routes>
          <Route path={RouteStrings.home} element={<HomePage />} />
          <Route path={RouteStrings.spaceHome} element={<Space />} />
          <Route path={RouteStrings.spaceAbout} element={<About />} />
          <Route
            path={RouteStrings.spaceArticles}
            element={<SpaceArticlesPage />}
          />
          <Route path={RouteStrings.hpHome} element={<HPHome />} />
          <Route
            path={RouteStrings.hpCharecteres}
            element={<HPCharecteres />}
          />
        </Routes>
      </div>
    </>
  );
};
