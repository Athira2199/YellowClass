import '../Home.css';
import { HiOutlineDownload } from 'react-icons/hi';

function Image({image}){
    console.log(image)
    return(
        <div className="img-wrap">
            <img src={image.urls.full} className="img-profile"/>
            <div className="hover-div" alt={image.alt_description}>
                <a href={`https://unsplash.com/photos/${image.id}/download?force=true`} download={image.id}><HiOutlineDownload size={32}/></a>
            </div>
        </div>
    )
}

export default Image;
