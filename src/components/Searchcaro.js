import React, { useEffect, useState, useRef } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import magnifyingGlassIcon from './Images/search-icon-transparent-images-vector-16.png'; 
import downloadIcon from './Images/download-icon-white-png-1.png';

function Search3() {
  const [query, setQuery] = useState("Free Wallpapers");
  const [photos, setPhotos] = useState([]);
  const [perPage, setPerpage] = useState(80);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const gridRef = useRef(null);
  const loadMoreButtonRef = useRef(null);
  const [hoveredImageId, setHoveredImageId] = useState(null);
  const [hoveredImageResolution, setHoveredImageResolution] = useState("");


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
      
    if (page === 1) {
      setPhotos(newPhotos);
    } else {
      setPhotos(newPhotos);
    }
    setLoading(false);
  };
  
    // setPhotos((prevPhotos) => [...prevPhotos, ...newPhotos]);
    // setLoading(false);
  // };

  // const loadMorePhotos = () => {
  //   setPage((prevPage) => prevPage + 1);
  // };
  const loadMorePhotos = () => {
    setPage((prevPage) => prevPage + 1);
    // Clear the existing photos when loading more.
    setPhotos([]);
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
    const photo = photos.find((item) => item.id === photoId);
    if (photo) {
      const resolution = `${photo.width}x${photo.height}`;
      setHoveredImageId(photoId);
      setHoveredImageResolution(resolution);
    }
  };
  
  const handleImageLeave = () => {
    setHoveredImageId(null);
    setHoveredImageResolution("");
  };
  
  return (
    <div>
      <div className="sticky-search">
      <span className="search-icon" style={{ backgroundImage: `url(${magnifyingGlassIcon})` }}></span>
      <input
        className="inputSearch"
        onKeyDown={onKeyDownHandler}
        placeholder="Search"
        onChange={(e) => setQuery(e.target.value)}
        value={query === "Free Wallpapers" ? "" : query}
        />
    </div>
      <div className="grid" ref={gridRef}>
        {photos.map((item, index) => (
          <div
            className="grid-item"
            key={index}
            onMouseEnter={() => handleImageHover(item.id)}
            onMouseLeave={handleImageLeave}
          >
            <img
              src={item.src.large2x}
              alt={item.id}
              loading="lazy" 
              width="100%"
              height="100%"
            />
            {hoveredImageId === item.id && (
              <div>
                <button
                  className="download-button"
                  onClick={() => handleDownload(item.id)}
                >
                  Download
                </button>
                <p className="image-resolution">
                  {hoveredImageResolution}
                </p>
              </div>
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
          Refresh
        </button>
      )}
    </div>
  );
}


export default Search3;