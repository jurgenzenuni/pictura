import React from 'react';
import './App.css';
import NavBar from './components/BsNav';
import Search from './components/Search'; 
import Search2 from './components/Search2';



function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
      </div>
      <div className="container1">
            <h1 className="title"> Free Wallpapers </h1>
            <p className='p'> Choose from the highest quality selection of high-definition wallpapers. Free to download and use for your mobile and desktop screens.</p>
            {/* <Search /> */}
            
            <Search2 />
        </div>
    </div>
  );
}

export default App;
