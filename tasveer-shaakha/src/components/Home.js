import InfiniteScroll from 'react-infinite-scroll-component';
import React ,{useEffect, useState}from 'react';
import Image from './Images'
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'

function Home() {
    /* initialize */
    const [images,setImages] = useState([])
    const [count,setCount] = useState(0)
    const [limit,setLimit] = useState(30)
    const [hasMore,sethasMore] = useState(true)

    /* get images from unsplash */
    const getImages = async() =>{
        setCount(count+1)
        const apiurl = `https://api.unsplash.com/photos/?page=${count}&per_page=${limit}&client_id=vdK41LMru9KXoyx7hMUPHdfi6zqAFaj-Yd9heKM_S4Q`;
        const response = await fetch(apiurl)
        const data = await response.json()
        const image = data
        setImages(images.concat(image))
        console.log(count)
    }

    /* fetch images on start */
    useEffect(()=>{
      getImages()
    },[])

    return (
        <div>
            <InfiniteScroll
            dataLength={images.length}
            next={getImages}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
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