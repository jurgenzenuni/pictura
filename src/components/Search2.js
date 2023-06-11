import React, { useEffect, useState, useRef } from "react";

function Search2() {
  const [query, setQuery] = useState("Nice Wallpapers");
  const [photos, setPhotos] = useState([]);
  const [perPage, setPerpage] = useState(40);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const gridRef = useRef(null);
  const loadMoreButtonRef = useRef(null);
  const [hoveredImageId, setHoveredImageId] = useState(null);

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

  const handleDownload = (photoId) => {
    const photo = photos.find((item) => item.id === photoId);
    if (photo) {
      const link = document.createElement("a");
      link.href = photo.src.original;
      link.download = `${photoId}.jpg`;
      link.click();
    }
  };

  const handleImageHover = (photoId) => {
    setHoveredImageId(photoId);
  };

  const handleImageLeave = () => {
    setHoveredImageId(null);
  };

  return (
    <div className="container1">
      <input
        className="inputSearch"
        onKeyDown={onKeyDownHandler}
        placeholder="Search"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      <div className="grid" ref={gridRef}>
        {photos.map((item, index) => (
          <div className="grid-item" key={index} onMouseEnter={() => handleImageHover(item.id)}
          onMouseLeave={handleImageLeave}>
            <img
              src={item.src.large2x}
              alt={item.id}
              loading="lazy" // Enable lazy loading
              width="100%"
              height="100%"
            />
            {hoveredImageId === item.id && (
              <button
                className="download-button"
                onClick={() => handleDownload(item.id)}
              >
                Download
              </button>
            )}
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

export default Search2;













