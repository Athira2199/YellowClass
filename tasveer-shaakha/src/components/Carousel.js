import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel }from 'react-responsive-carousel';
import FadeIn from 'react-fade-in';
function Popup({images,itemNo}) {
    return(
    <FadeIn>
        <Carousel showArrows={true} showThumbs={false} selectedItem={itemNo}> {/* keeping current slide with arrows shown thumbs hidden */}

        {images.map(image=>(
            <div>
                <img src={image.urls.full} />
            </div>
        ))}

        </Carousel>
    </FadeIn>
    )
}

export default Popup

