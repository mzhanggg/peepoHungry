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

    const reviewButton = userReview ? 
        ( <button type="submit" id="rev-sub-btn" onClick={handleUpdate}><i id="rev-sub-star" className="far fa-star"></i>Update Your Review</button>) 
        : 
        (<button type="submit" id="rev-sub-btn" onClick={handleNew}><i id="rev-sub-star" className="far fa-star"></i>Write a Review</button>);

    useEffect(() => {
        dispatch(fetchBusiness(businessId));
    }, [businessId])
    
    if (!businessId || !userReview) {
        nav('/')
    }
   
    return (
        <>
            <BusinessIndexHeader />
            
            <div id="rev-sub">
                {reviewButton}
            </div>

            <div id="biz-info-container">
                <div id="location-hours-container">
                    <p id="location-hours-title">Location & Hours</p>

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
                    <div id="sticky-div">
                        <div id="sticky-content">
                            <p>{business.phoneNumber}</p>
                            <p>{business.address}, {business.city}, {business.state}, {business.zipcode}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="reviews">
                <h1 id="reviews-title">Recommended Reviews</h1>
               <ReviewIndex />
            </div>

        </>
    )
}

export default BusinessShow;