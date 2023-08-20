import React from "react";
import {format, parseISO} from "date-fns";

const Content = ({ movies }) => {

  return (
    <div className="contentContainer">
      {movies?.map((movie, i) => (
        <article key={i}>
          <div className="articleDiv">
          <h3>{movie.title}</h3>
          <p className="date">{format(parseISO(movie.release_date), 'MMMM dd, yyyy')}</p>
          <p className="synopsis">{`${(movie.opening_crawl).slice(0, 260)}...`}</p> 
          <div className="lineDiv"></div>
          <a href="#">More Info</a>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Content;
