import React from "react";

const NewsCard = ({ news }) => {
  return (
    <div className="my-5 grid grid-cols-1 gap-3">
      <div className="card bg-base-100 w-full shadow-sm">
        <figure>
          <img src={news.image_url} alt="image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{news.title}</h2>
          <p>{news.details}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{news.rating.badge}</div>
            <div className="badge badge-outline">{news.total_view}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
