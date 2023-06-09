import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateReview } from "../../store/reviewReducer";
import { useParams, useNavigate } from "react-router-dom";
import { getReview, fetchReviews } from "../../store/reviewReducer";
import { fetchBusiness } from "../../store/businessReducer";
import { getBusiness } from "../../store/businessReducer";

const ReviewEditForm = () => {
    const dispatch = useDispatch();
    const nav = useNavigate();
    const {reviewId} = useParams();
    const {businessId} = useParams();
    const review = useSelector(getReview(reviewId))
    const business = useSelector(getBusiness(businessId))
    const [body, setBody] = useState(review.body);
    const [rating, setRating] = useState(review.rating);

    const handleSubmit = e => {
        e.preventDefault();
        const reviewObj = {
            body,
            rating,
            business_id: businessId
        }

        dispatch(updateReview(reviewObj, reviewId));
        nav(`/businesses/${businessId}`);
    }

    useEffect(() => {
        dispatch(fetchBusiness(businessId))
    }, [businessId])

    useEffect(() => {
        dispatch(fetchReviews(businessId))
    }, [businessId])

    return (
        <div id="review-form-container">

            <form id="review-form">
                <h1 id="form-biz-name">{business.name}</h1>
                <div id="form-details-container">
                    <label id="form-stars">
                        <input type="text" 
                            placeholder="1-5" 
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                            required>
                        </input>
                    </label>

                    <label id="form-review-body">
                        <input type="textarea" 
                            placeholder="Write your review here!"
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                            required>
                        </input>
                    </label>
                </div>

                <button id="form-review-btn" type="submit" onClick={handleSubmit}>Update Review</button>
            </form>
        </div>
    )
}

export default ReviewEditForm;