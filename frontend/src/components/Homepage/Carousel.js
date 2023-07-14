import React, { useEffect, useState } from "react";
import './Carousel.css';

const Carousel = () => {
    const images = [
        "https://images.unsplash.com/photo-1483137140003-ae073b395549?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
        "https://images.unsplash.com/photo-1674876105548-520cc1e2c82a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
        "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
        
        // pepeBye
        // "https://pbs.twimg.com/media/EgXjY03WoAMFTfz?format=jpg&name=large",
        // "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/60f0d74e-6334-4486-bfe1-216a182188d0/df7awia-916bc0b7-4b6d-46db-8ac7-9dc240f08bcd.png/v1/fill/w_1057,h_756,q_70,strp/peepo_happy_by_korunecka_df7awia-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTE1IiwicGF0aCI6IlwvZlwvNjBmMGQ3NGUtNjMzNC00NDg2LWJmZTEtMjE2YTE4MjE4OGQwXC9kZjdhd2lhLTkxNmJjMGI3LTRiNmQtNDZkYi04YWM3LTlkYzI0MGYwOGJjZC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Hma94SuVs6T4TItzUKS7q2MGv1FtPw2ZCu9EGWca_8E",
        // "https://pbs.twimg.com/media/FNBKeeWWYAgU1Lz?format=jpg&name=medium",
        // "https://wallpapers.com/images/high/pepe-the-frog-windows-screen-n61auindwpflk2wl.webp",
        // "https://i.makeagif.com/media/6-22-2017/ZdBCAq.gif",
        // "https://f8n-ipfs-production.imgix.net/QmW5GvyCUPFqjXwXCg1ePRXBupZwXddXUzWCiJ7rpqbdHh/nft.jpg?q=80&auto=format%2Ccompress&cs=srgb&w=3000&h=3000&fit=max",
        // "https://technext24.com/wp-content/uploads/2023/05/1DBB9FE6-D93B-49E8-B3D5-0D33989A1927.jpeg"
        // "https://c4.wallpaperflare.com/wallpaper/343/333/198/feelsbadman-memes-pepe-meme-wallpaper-preview.jpg",
        // "https://i.kym-cdn.com/entries/icons/original/000/025/382/Screen_Shot_2018-02-06_at_3.37.14_PM.png"
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