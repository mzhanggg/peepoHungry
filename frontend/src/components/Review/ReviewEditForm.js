import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateReview } from "../../store/reviewReducer";
import { useParams, useNavigate } from "react-router-dom";
import { getReview, fetchReviews } from "../../store/reviewReducer";
import { fetchBusiness } from "../../store/businessReducer";
import { getBusiness } from "../../store/businessReducer";
import ReviewStar from "./ReviewStar";

const ReviewEditForm = () => {
    const dispatch = useDispatch();
    const nav = useNavigate();
    const {reviewId} = useParams();
    const {businessId} = useParams();
    const review = useSelector(getReview(reviewId));
    const business = useSelector(getBusiness(businessId));
    const [body, setBody] = useState(review.body);
    const [rating, setRating] = useState(review.rating);
    const [errors, setErrors] = useState([]);
    
    const toTop = () => {
        window.scrollTo(0, 0)
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setErrors([]);

        const reviewObj = {
            body,
            rating,
            business_id: businessId
        }

        try {
            await dispatch(updateReview(reviewObj, reviewId));

            if (errors.length === 0) {
                nav(`/businesses/${businessId}`)
            }
        } catch (error) {
            let data;
            try {
                data = JSON.parse(error.message);
            } catch {
              data = error.message;
            }
      
            if (data?.errors) setErrors(data);
            else setErrors([error.message]);
         
        }
        
        toTop();
    }

    useEffect(() => {
        dispatch(fetchBusiness(businessId))
        dispatch(fetchReviews(businessId))
    }, [businessId])

    return (
        <div id="review-form-container">

            <form id="review-form">
                <h1 id="form-biz-name">{business.name}</h1>
                
                <ul>
                    {errors ? errors.map((error, i) => <li key={i}>{error}</li>) : null}
                </ul>

                <div id="form-details-container">

                    <label id="form-stars">
                        <ReviewStar rating={rating} setRating={setRating} />
                        <span> Select your rating</span>
                    </label>

                    <label id="form-review-body">
                        <textarea 
                            placeholder="Write your review here!"
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                        />

                    </label>
                </div>

                <button id="form-review-btn" type="submit" onClick={handleSubmit}>Update Review</button>
            </form>
        </div>
    )
}

export default ReviewEditForm;