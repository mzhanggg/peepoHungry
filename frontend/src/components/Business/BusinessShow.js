import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchBusiness, getBusiness } from "../../store/businessReducer";
import { useParams, useNavigate } from 'react-router-dom';
import BusinessIndexHeader from "./BusinessIndexHeader";
import MapWrapper from "../Map/Map";
import Hours from "./Hours";
import ReviewIndex from "../Review/ReviewIndex";
import {fetchReviews, getReviews} from "../../store/reviewReducer";
import "./BusinessShow.css"


const BusinessShow = () => {
    const dispatch = useDispatch();
    const {businessId} = useParams();
    const business = useSelector(getBusiness(businessId));
    const nav = useNavigate();
    
    useEffect(() => {
        dispatch(fetchBusiness(businessId));
    }, [businessId])


    const reviews = useSelector(getReviews)
    
    if (!businessId || !reviews) {
        return nav("/");
    }
    const filteredRevs = reviews.filter(review => review.businessId === businessId)

    const handleClick = e => {
        e.preventDefault();
        nav(`/businesses/${businessId}/write-a-review`)
    }

    return (
        <>
            <BusinessIndexHeader />
            <div id="location-hours-container">
                <p>Location & Hours</p>

                <div id="location-hours">
                    <div id="map-container">
                        <MapWrapper></MapWrapper>
                    </div>

                    <div id="hours-container">
                        <Hours business={business}/>
                    </div>
                </div>
            </div>

            <div id="sticky-side-nav">
                <div>
                    <h1>sticky side nav</h1>
                </div>
            </div>

            <div id="reviews">
               <ReviewIndex />
            </div>

            <button type="submit" onClick={handleClick}>Write a Review</button>
        </>
    )
}

export default BusinessShow;