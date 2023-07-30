import React, { useState } from "react";
import { Images } from "../../../Assets/imagesStrings";
import "./styles.scss";
import {
  GetAllArticlesService,
  GetAllSpaceBlogsService,
  GetAllSpcaeReports,
} from "../../../Services/SpaceServices";
import { useNavigate } from "react-router-dom";
import { RouteStrings } from "../../../Routes/RouteStrings";
import { SpaceArticlesPage } from "./SpaceArticlesPage";
import { SpaceBlogs } from "./SpaceBlogs";
import { SpaceReports } from "./SpaceReports";
import { SpaceInfo } from "./SpaceInfo";
import { SpaceEvents } from "./SpaceEvents";
import { SpaceLaunch } from "./SpaceLaunch";
import { TailSpin } from "react-loader-spinner";

export const SpaceArticles = () => {
  const navigate = useNavigate();
  const [showSpaceArticles, setShowSpaceArticles] = useState(false);
  const [showSpaceBlogs, setShowSpaceBlogs] = useState(false);
  const [showSpaceReports, setShowSpaceReports] = useState(false);
  const [showSpaceInfo, setShowSpaceInfo] = useState(false);
  const [showSpaceEvents, setShowSpaceEvents] = useState(false);
  const [showSpaceLaunch, setShowSpaceLaunch] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  const [spcaeArticles, setSpaceArticles] = useState([]);
  const [spaceBlogs, setSpaceBlogs] = useState([]);
  const [spaceReports, setSpaceReports] = useState([]);

  const getArticles = async () => {
    setShowSpinner(true);
    let res = await GetAllArticlesService();
    if (res.status === 200) {
      setShowSpinner(false);
      setSpaceArticles(res.data);
      setShowSpaceArticles(true);
      console.log("clicked", res);
    } else {
      console.log("error getting the articles");
    }
  };

  const getAllBlogs = async () => {
    setShowSpinner(true);
    let res = await GetAllSpaceBlogsService();
    if (res.status === 200) {
      setShowSpinner(false);
      setSpaceBlogs(res.data);
      setShowSpaceBlogs(true);
    }
  };

  const getAllReports = async () => {
    setShowSpinner(true);
    let res = await GetAllSpcaeReports();
    if (res.status === 200) {
      setShowSpinner(false);
      setSpaceReports(res.data);
      setShowSpaceReports(true);
    }
  };

  const getAllSpaceInfo = async () => {
    setShowSpaceInfo(true);
  };

  const getAllSpaceEvents = async () => {
    setShowSpaceEvents(true);
  };

  const getAllSpaceLaunch = async () => {
    setShowSpaceLaunch(true);
  };

  const hideArticles = () => {
    setShowSpaceArticles(false);
  };
  const hideBlogs = () => {
    setShowSpaceBlogs(false);
  };
  const hideReports = () => {
    setShowSpaceReports(false);
  };

  const hideSpaceInfo = () => {
    setShowSpaceInfo(false);
  };
  const hideSpaceEvents = () => {
    setShowSpaceEvents(false);
  };
  const hideSpaceLaunch = () => {
    setShowSpaceLaunch(false);
  };

  // const gotoSpaceArticles = () => {
  //   navigate(RouteStrings.spaceArticles);
  // };

  return (
    <>
      <div className="position-relative">
        {showSpinner && (
          <>
            <div className="spinnerDiv">
              <TailSpin
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            </div>
          </>
        )}
        <div className="w-100 text-center">
          <h3>Select Categories</h3>
        </div>

        <div className="categoriesDiv">
          <div className="row">
            <div className="col-md-3">
              <div className="_category" onClick={getArticles}>
                <img src={Images.folder} alt="" className="folderimg" />
                <h5>Space Articles</h5>
              </div>
            </div>
            <div className="col-md-3">
              <div className="_category" onClick={getAllBlogs}>
                <img src={Images.folder} alt="" className="folderimg" />
                <h5>Blogs</h5>
              </div>
            </div>
            {/* <div className="col-md-3">
              <div className="_category" onClick={getAllSpaceInfo}>
                <img src={Images.folder} alt="" className="folderimg" />
                <h5>Info</h5>
              </div>
            </div> */}
            <div className="col-md-3">    
              <div className="_category" onClick={getAllReports}>
                <img src={Images.folder} alt="" className="folderimg" />
                <h5>Reports</h5>
              </div>
            </div>
            {/* <div className="col-md-3">
              <div className="_category" onClick={getAllSpaceEvents}>
                <img src={Images.folder} alt="" className="folderimg" />
                <h5>Events</h5>
              </div>
            </div> */}
            {/* <div className="col-md-3">
              <div className="_category" onClick={getAllSpaceLaunch}>
                <img src={Images.folder} alt="" className="folderimg" />
                <h5>Launch</h5>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {showSpaceArticles && (
        <>
          <div className="spaceArticesDiv px-4">
            <button className="btn_" onClick={hideArticles}>
              X
            </button>

            <SpaceArticlesPage articles={spcaeArticles} />
          </div>
        </>
      )}

      {showSpaceBlogs && (
        <>
          <div className="spaceArticesDiv px-4">
            <button className="btn_" onClick={hideBlogs}>
              X
            </button>

            <SpaceBlogs blogs={spaceBlogs} />
          </div>
        </>
      )}

      {showSpaceReports && (
        <>
          <div className="spaceArticesDiv px-4">
            <button className="btn_" onClick={hideReports}>
              X
            </button>

            <SpaceReports reports={spaceReports} />
          </div>
        </>
      )}

      {showSpaceInfo && (
        <>
          <div className="spaceArticesDiv px-4">
            <button className="btn_" onClick={hideSpaceInfo}>
              X
            </button>

            <SpaceInfo />
          </div>
        </>
      )}

      {showSpaceEvents && (
        <>
          <div className="spaceArticesDiv px-4">
            <button className="btn_" onClick={hideSpaceEvents}>
              X
            </button>

            <SpaceEvents />
          </div>
        </>
      )}
      {showSpaceLaunch && (
        <>
          <div className="spaceArticesDiv px-4">
            <button className="btn_" onClick={hideSpaceLaunch}>
              X
            </button>

            <SpaceLaunch />
          </div>
        </>
      )}
    </>
  );
};
