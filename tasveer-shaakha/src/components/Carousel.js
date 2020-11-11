import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel }from 'react-responsive-carousel';
function Popup() {
    return(
    <Carousel showArrows={true} showThumbs={false}>
        <div>
            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" />
            <p className="legend">Legend 1</p>
        </div>
        <div>
            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" />
            <p className="legend">Legend 1</p>
        </div>
        <div>
            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" />
            <p className="legend">Legend 1</p>
        </div>
    </Carousel>
    )
}

export default Popup