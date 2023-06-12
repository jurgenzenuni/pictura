import React from 'react';
import './App.css';
import NavBar from './components/BsNav';
import Search2 from './components/Search2';
import Search3 from './components/Searchcaro';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import carouselImage1 from "./components/Images/nature-landscape-mountains-4k_1551644850.jpg"
import carouselImage2 from './components/Images/nature-hd-sd-3840x2160.jpg'
import carouselImage3 from './components/Images/andrew-neel-jtsW--Z6bFw-unsplash.jpg'


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
            <img src={carouselImage3} alt="Carousel Image 1" />
            <div className="carousel-content">
              <h1 className="carousel-title"> The best free stock photos, royalty free images & videos shared by creators.</h1>
              <p className="carousel-description">  Powered By Pexels</p>
            </div>
          </div>
          <div className="carousel-slide">
            <img src={carouselImage2} alt="Carousel Image 2" />
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
        <Search3 />
      </div>
    </div>
  );
}

export default App;
