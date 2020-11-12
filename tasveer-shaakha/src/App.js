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
function App() {
  const [clicked,setClicked] = useState(false)
  const [images,setImages] = useState([])

  useEffect(()=>{
    getImages()
  },[])
  const getImages = async() =>{
    const apiurl = 'https://api.unsplash.com/photos/?page=1&per_page=12&client_id=vdK41LMru9KXoyx7hMUPHdfi6zqAFaj-Yd9heKM_S4Q';
    const response = await fetch(apiurl)
    const data = await response.json()
    const images = data
    setImages(images)
  }
  return (
    <div className="App">
      <button onClick={()=>setClicked(true)}>Click</button>
      { images!=[]  ? <Popup images={images}></Popup> : false }
    </div>
  );
}

export default App;
