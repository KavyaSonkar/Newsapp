import React from "react";

const NewsItems = (props) => {
  let { title, description, imageUrl, url, author, date, source } = props;

  return (
    <div className="my-3">
      <div className="card">
        <div></div>
        <span
          className="position-absolute top-0  translate-middle badge rounded-pill bg-danger"
          style={{
            left: "90%",
            zIndex: "1",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          {source}
          <span className="visually-hidden">unread messages</span>
        </span>
        <img
          src={
            // !imageUrl
            //   ? "https://www.hindustantimes.com/ht-img/img/2024/03/07/1600x900/ANI-20240304139-0_1709806713113_1709806795091.jpg" :
            imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}... </h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small>
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a href={url} target="_blank" className="btn btn-sm btn-dark">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItems;
