import React, { useEffect, useState } from "react";
import axios from "axios";

function Ulbitest() {
  const [photos, setPhotos] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [fetching, setFetching] = useState(true);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    if (fetching) {
      axios
        .get(
          `https://jsonplaceholder.typicode.com/photos?_limit=10&_page=${currentPage}`
        )
        .then((response) => {
          setPhotos([...photos, ...response.data]);
          setCurrentPage((prevState) => prevState + 1);
          setTotalCount(response.headers("x-total-count"))
        })
        .finally(() => setFetching(false));
    }
  }, [fetching, currentPage, photos]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <100
         && photos.length < totalCount
    ) {
      setFetching(true);
    }
    console.log("scrollHeight", e.target.documentElement.scrollHeight);
    console.log("scrollTop", e.target.documentElement.scrollTop);
    console.log("innerHeight", window.innerHeight);
  };

  return (
    <div>
      <div>
        {photos.map((photo) => (
          <div>
            <div className="title">
              {photo.id} {photo.title}
            </div>
            <img src={photo.thumbnailUrl} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ulbitest;
