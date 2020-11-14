import '../Home.css';
import { HiOutlineDownload } from 'react-icons/hi';
import { RiZoomInLine } from 'react-icons/ri';


function Image({image,key,showCarousel}){
    return(
        <div className="img-wrap">
            <img src={image.urls.full} className="img-profile"/>
            <div className="hover-div" alt={image.alt_description}>
                <a href={`https://unsplash.com/photos/${image.id}/download?force=true`} download={image.id}><HiOutlineDownload size={32}/></a>
                <a href="" style={{paddingLeft:"100px"}}><RiZoomInLine size={32} /></a>
            </div>
        </div>
    )
}

export default Image;
