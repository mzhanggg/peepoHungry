import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createReview } from "../../store/reviewReducer";
import { useParams, useNavigate } from "react-router-dom";
import { getBusiness } from "../../store/businessReducer";
import './ReviewForm.css';
import { fetchBusiness } from "../../store/businessReducer";
import { fetchReviews } from "../../store/reviewReducer";

const ReviewForm = () => {
    const nav = useNavigate();
    const dispatch = useDispatch();
    const {businessId} = useParams();
    const business = useSelector(getBusiness(businessId));
    const [body, setBody] = useState('');
    const [rating, setRating] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(createReview({rating, body, business_id: businessId}));
        nav(`/businesses/${businessId}`);
    }

    const reviews = useSelector(state => {
        return Object.values(state.reviews).filter(review => review.businessId === businessId)
    })

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

                <button id="form-review-btn" type="submit" onClick={handleSubmit}>Post Review</button>
            </form>
        </div>
    )
}

export default ReviewForm;