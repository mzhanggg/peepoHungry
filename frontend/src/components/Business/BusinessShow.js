import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchBusiness, getBusiness } from "../../store/businessReducer";
import { useParams, useNavigate } from 'react-router-dom';
import BusinessIndexHeader from "./BusinessIndexHeader";
import MapWrapper from "../Map/Map";
import Hours from "./Hours";
import ReviewIndex from "../Review/ReviewIndex";
import "./BusinessShow.css"

const BusinessShow = () => {
    const dispatch = useDispatch();
    const {businessId} = useParams();
    const business = useSelector(getBusiness(businessId));
    const nav = useNavigate();
    const sessionUser = useSelector(state => state.session.user);

    const reviews = useSelector(state => {
        return Object.values(state.reviews).filter(review => review.businessId === Number(businessId))
    })
    
    const handleNew = e => {
        e.preventDefault();
        nav(`/businesses/${businessId}/write-a-review`)
    }

    const handleUpdate = e => {
        e.preventDefault();
        nav(`/businesses/${businessId}/${userReviewId}/edit`)
    }
    
    const userReview = reviews.find(review => review.userId === sessionUser.id);
    const userReviewId = userReview ? userReview.id : null;

    const reviewButton = userReview ? ( <button type="submit" onClick={handleUpdate}>Update Your Review</button>) : (<button type="submit" onClick={handleNew}>Write a Review</button>);

    useEffect(() => {
        dispatch(fetchBusiness(businessId));
    }, [businessId])
    
    if (!businessId) {
        return <h1>Loading...</h1>;
    }
   
    return (
        <>
            <BusinessIndexHeader />
            
            {reviewButton}
            
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

        </>
    )
}

export default BusinessShow;