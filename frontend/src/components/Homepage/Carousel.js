import React, { useEffect, useState } from "react";
import './Carousel.css';

const Carousel = () => {
    const images = [
        "https://c4.wallpaperflare.com/wallpaper/343/333/198/feelsbadman-memes-pepe-meme-wallpaper-preview.jpg",
        "https://f8n-ipfs-production.imgix.net/QmW5GvyCUPFqjXwXCg1ePRXBupZwXddXUzWCiJ7rpqbdHh/nft.jpg?q=80&auto=format%2Ccompress&cs=srgb&w=3000&h=3000&fit=max",
        "https://i.kym-cdn.com/entries/icons/original/000/025/382/Screen_Shot_2018-02-06_at_3.37.14_PM.png"
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    const carouselIndex = () => {
        if (currentIndex === images.length - 1) {
            return setCurrentIndex(0);
        }

        return setCurrentIndex(currentIndex + 1);
    }
    
    useEffect(() => {
        const interval = setInterval(() => {
            carouselIndex()
        }, 3000)
        
        return () => clearInterval(interval);
    }, [currentIndex])

    return (

        <div id="carousel-container">
            <div className="carousel-inner" 
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {images.map((img, index) => (
                        <div className={`carousel-item ${index === currentIndex ? "active" : ""}`}
                            key={index}>
                            <img src={img} alt={`Slide ${index}`} />
                        </div>
                    ))}
            </div>
      </div>
    )

}

export default Carousel;