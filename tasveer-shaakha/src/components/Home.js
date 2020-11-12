import InfiniteScroll from 'react-infinite-scroll-component';
import React ,{useEffect, useState}from 'react';
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'
import Image from './Images'
import MainNavbar from './Navbar';


function Home() {
    /* initialize */
    const [images,setImages] = useState([])
    const [count,setCount] = useState(0)
    const [limit,setLimit] = useState(30)
    const [hasMore,sethasMore] = useState(true)
    const [loading,setloading] = useState(false)
    const [query,setQuery] = useState('')
    const [pquery,setpQuery] = useState('')

    /* on change input value handler */
    const searchHandler = (event)=>{
        setQuery(event.target.value)
    }
    /* get images from unsplash */
    const getImages = async() =>{
        setCount(count+1)
        if(query !== '' ){
            const apiurl = `https://api.unsplash.com/search/photos?query=${query}&page=${count}&per_page=${limit}&client_id=vdK41LMru9KXoyx7hMUPHdfi6zqAFaj-Yd9heKM_S4Q`
            const response = await fetch(apiurl)
            const data = await response.json()
            const image = data.results
            setImages(image.concat(images))
        }
        else{
            const apiurl = `https://api.unsplash.com/photos/?page=${count}&per_page=${limit}&client_id=vdK41LMru9KXoyx7hMUPHdfi6zqAFaj-Yd9heKM_S4Q` ;
            const response = await fetch(apiurl)
            const data = await response.json()
            const image = data
            setImages(images.concat(image))
        }

    }

    /* fetch images on start */
    useEffect(()=>{
      getImages()
    },[])

    return (
        <div>
            <MainNavbar searchHandler={searchHandler} query={query} getImages={getImages}/>
            <InfiniteScroll
            dataLength={images.length}
            next={getImages}
            hasMore={hasMore}
            loader={<h4>Loading...</h4> }
            >
            <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
                <Masonry>
                    {images.map(image=>(
                        <Image image={image}/>
                    )) }
                </Masonry>
            </ResponsiveMasonry>
            </InfiniteScroll>
        </div>
    );
}

export default Home;