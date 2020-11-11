import './App.css';
import Popup from './components/Carousel';
import React ,{useEffect, useState}from 'react';
// import {getApiUrl} from'ImageProvider.js'
function transformPaths({ links, urls }) {
  return {
    download: links.download_location,
    fullscreen: urls.full,
    regular: urls.regular,
    thumbnail: urls.thumb,
  };
}
function transformImageData(arr) {
  return arr.map(img => ({
    color: img.color,
    caption: img.description,
    createdAt: img.created_at,
    likes: img.likes,
    source: transformPaths(img),
    title: img.title,
  }));
}
function getApiUrl() {
  const query = '';
  const url =
    'https://api.unsplash.com/photos/?page=1&per_page=12';
  return `${url}${query}&client_id=vdK41LMru9KXoyx7hMUPHdfi6zqAFaj-Yd9heKM_S4Q`;
}
function App() {
  const [clicked,setClicked] = useState(false)
  const [image,setImages] = useState([])
  const [loading,setLoading] = useState(false)
  fetch(getApiUrl())
      .then(res => res.json())
      .then((data) => {
        const images = data.results;
        setImages(images)
      })
      .catch(err => {
        console.error('Error occured when fetching images', err);
  });
  return (
    <div className="App">
      <button onClick={()=>setClicked(true)}>Click</button>
      { clicked  ? <Popup images={image}></Popup> : null }
    </div>
  );
}

export default App;
