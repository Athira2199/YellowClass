import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel }from 'react-responsive-carousel';
import FadeIn from 'react-fade-in';
function Popup({images}) {
    console.log(images)
    return(
    <FadeIn>
        <Carousel showArrows={true} showThumbs={false} selectedItem={2}> {/* keeping current slide with arrows shown thumbs hidden */}

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

