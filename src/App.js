import React from 'react';
import './App.css';
import NavBar from './components/BsNav';
import Search2 from './components/Search2';
import Search3 from './components/Searchcaro';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import carouselImage1 from "./components/Images/nature-landscape-mountains-4k_1551644850.jpg"
import carouselImage2 from './components/Images/nature-hd-sd-3840x2160.jpg'
import carouselImage3 from './components/Images/5003-lake-mountains-trees-rain-nature-4k.jpg'



function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
      </div>
      <div className="carousel-container">
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showThumbs={false}
          dynamicHeight={false}
          className="carousel-full-width"
          transitionTime={500}
        >
          <div className="carousel-slide">
            <img src={carouselImage3} alt="Carousel Image 1" />
            <div className="carousel-content">
              <h1 className="carousel-title">Free Wallpapers</h1>
              {/* <p className="carousel-description">Free to download and use for your mobile and desktop screens.</p> */}
            </div>
          </div>
          <div className="carousel-slide">
            <img src={carouselImage2} alt="Carousel Image 2" />
            <div className="carousel-content">
              <h1 className="carousel-title">Free Wallpapers</h1>
              {/* <p className="carousel-description">Free to download and use for your mobile and desktop screens.</p> */}
            </div>
          </div>
          <div className="carousel-slide">
            <img src={carouselImage1} alt="Carousel Image 3" />
            <div className="carousel-content">
              <h1 className="carousel-title">Free Wallpapers</h1>
              {/* <p className="carousel-description">Free to download and use for your mobile and desktop screens.</p> */}
            </div>
          </div>
        </Carousel>
      </div>
      <div className="container1">
        <Search3 />
      </div>
    </div>
  );
}

export default App;
