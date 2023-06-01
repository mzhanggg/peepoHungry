import BusinessIndex from "../Business/BusinessIndex";
import Navigation from "../Navigation";
import './Homepage.css';
import Carousel from "./Carousel";

const Homepage = () => {


    return (
        <>
            <Carousel />
            <BusinessIndex />

            {/* <img id="splash-img"src="https://i.kym-cdn.com/entries/icons/original/000/025/382/Screen_Shot_2018-02-06_at_3.37.14_PM.png"></img> */}
        </>
    )


}

export default Homepage;