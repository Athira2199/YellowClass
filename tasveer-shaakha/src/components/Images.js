import '../Home.css';
import { HiOutlineDownload } from 'react-icons/hi';
function Image({image}){
    return(
        <div class="img-wrap">
            <img src={image.urls.full} className="img-profile"/>
            <div className="hover-div">
                <a href="#"><HiOutlineDownload size={32}/></a>
            </div>
        </div>
    )
}

export default Image;
