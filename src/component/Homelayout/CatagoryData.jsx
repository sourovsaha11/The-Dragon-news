import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../NewsCard";

const CatagoryData = () => {
  const { id } = useParams(); //string value
  const data = useLoaderData();

  const [catagoryNews, setCatagoryNews] = useState([]);

  console.log(data);

  useEffect(() => {
    if (id === "0") {
      setCatagoryNews(data);
    } else if (id == "1") {
      const filterNews = data.filter(
        (news) => news.others.is_today_pick == true
      );
      setCatagoryNews(filterNews);
    } else {
      const filterNews = data.filter((news) => news.category_id == id);
      setCatagoryNews(filterNews);
    }
  }, [id, data]);
  return (
    <div>
      <h3 className="font-semibold flex mt-2 justify-center">
        There are{" "}
        <span className="text-red-400 mx-2">{catagoryNews.length}</span> news
        here
      </h3>

      <div className="div">
        {catagoryNews.map((news) => (
          <NewsCard news={news} key={news.id}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CatagoryData;
