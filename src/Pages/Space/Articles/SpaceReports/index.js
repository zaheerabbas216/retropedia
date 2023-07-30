import React from "react";
import "./styles.scss";

export const SpaceReports = ({ reports }) => {
  const getDate = (date) => {
    let _date = new Date(date);
    return _date.toLocaleString();
  };
  return (
    <div>
      <div className="mainArticlesDiv">
        <div className="w-100 text-center">
          <h2>Space Blogs</h2>
        </div>

        <div className="articlesDiv">
          <div className="row">
            {reports.results.map((result) => {
              return (
                <>
                  <div className="col-md-4 mb-2">
                    <div className="articleCard card p-2">
                      <img
                        src={result.image_url}
                        alt=""
                        className="resultImage"
                      />
                      <h4>{result.title}</h4>

                      <p className="mb-0">{result.summary}</p>

                      <p className="mb-0">Source : {result.news_site}</p>

                      <p className="mb-0">
                        Published on : {getDate(result.published_at)}
                      </p>
                      <button
                        className="btn btn-info _resultBtn"
                        onClick={() => {
                          window.open(`${result.url}`);
                        }}
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
