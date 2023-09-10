import React from 'react';
import './App.css';
import NavBar from './components/BsNav';
import Search from './components/Search';
import Search3 from './components/Searchcaro';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import carouselImage1 from './components/Images/1482571-free-4k-wallpaper-nature-3686x1752-for-iphone-5s.jpg'
import carouselImage2 from './components/Images/nature-hd-sd-3840x2160.jpg'
import carouselImage3 from './components/Images/1208210.jpg'


function App() {
  return (
    <div className="App">
      <div>
        <NavBar 
        />
      </div>
      <div className="carousel-container">
        <Carousel
          autoPlay
          interval={10000}
          infiniteLoop
          showStatus={false}
          showThumbs={false}
          dynamicHeight={false}
          className="carousel-full-width"
          transitionTime={550}
        >
          <div className="carousel-slide">
            <img src={carouselImage1} alt="Carousel Image 1" />
            <div className="carousel-content">
              <h1 className="carousel-title"> The best free stock photos, royalty free images & videos shared by creators.</h1>
              <p className="carousel-description">  Powered By Pexels</p>
            </div>
          </div>
          <div className="carousel-slide">
            <img src={carouselImage3} alt="Carousel Image 2" />
            <div className="carousel-content">
              <h1 className="carousel-title">Refresh your screen with vibrant and inspiring visuals.</h1>
              <p className="carousel-description">Powered By Pexels</p>
            </div>
          </div>
          {/* <div className="carousel-slide">
            <img src={carouselImage1} alt="Carousel Image 3" />
            <div className="carousel-content">
              <h1 className="carousel-title"></h1>
              <p className="carousel-description">Powered By Pexels</p>
            </div>
          </div> */}
        </Carousel>
      </div>
      <div className="container1">
        <Search />
      </div>
    </div>
  );
}

export default App;
