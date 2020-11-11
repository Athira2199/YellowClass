import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel }from 'react-responsive-carousel';
import FadeIn from 'react-fade-in';
function Popup() {
    return(
    <FadeIn>
        <Carousel showArrows={true} showThumbs={false} selectedItem={2}> {/* keeping current slide with arrows shown thumbs hidden */}
            <div>
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <FadeIn>
                    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" />
                    <p className="legend">Legend 1</p>
                </FadeIn>
            </div>
            <div>
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" />
                <p className="legend">Legend 1</p>
            </div>
        </Carousel>
    </FadeIn>
    )
}

export default Popup

