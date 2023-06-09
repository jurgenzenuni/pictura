import React, { useEffect, useState, useRef } from "react";

function Search() {
  const [query, setQuery] = useState("Nice Wallpapers");
  const [photos, setPhotos] = useState([]);
  const [perPage, setPerpage] = useState(80);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const gridRef = useRef(null);
  const loadMoreButtonRef = useRef(null);

  const getPhotos = async () => {
    setLoading(true);
    const response = await fetch(
      `https://api.pexels.com/v1/search?query=${query}&per_page=${perPage}&page=${page}`,
      {
        headers: {
          Authorization: process.env.REACT_APP_API_KEY,
        },
      }
    );

    const data = await response.json();
    const newPhotos = data.photos;

    setPhotos((prevPhotos) => [...prevPhotos, ...newPhotos]);
    setLoading(false);
  };

  const loadMorePhotos = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    getPhotos();
  }, [page]);

  useEffect(() => {
    if (gridRef.current) {
      gridRef.current.scrollTop = 0;
    }
  }, [photos]);

  const onKeyDownHandler = (e) => {
    if (e.keyCode === 13) {
      setPage(1);
      setPhotos([]);
      getPhotos();
    }
  };

  return (
    <div>
      <input
        className="inputSearch"
        onKeyDown={onKeyDownHandler}
        placeholder="Search"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      <div className="grid" ref={gridRef}>
        {photos.map((item, index) => (
          <div className="grid-item" key={index}>
            <img
              src={item.src.original}
              alt={item.id}
              loading="lazy" // Enable lazy loading
              width="100%"
              height="100%"
            />
          </div>
        ))}
        {loading && <p>Loading...</p>}
      </div>
      {!loading && (
        <button
          className="btn-load-more"
          onClick={loadMorePhotos}
          ref={loadMoreButtonRef}
        >
          Load More
        </button>
      )}
    </div>
  );
}

export default Search;













