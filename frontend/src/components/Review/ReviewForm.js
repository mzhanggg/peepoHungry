import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createReview } from "../../store/reviewReducer";
import { useParams, useNavigate } from "react-router-dom";
import { getBusiness, fetchBusiness } from "../../store/businessReducer";
import { fetchReviews } from "../../store/reviewReducer";
import ReviewStar from "./ReviewStar";
import './ReviewForm.css';

const ReviewForm = () => {
    const nav = useNavigate();
    const dispatch = useDispatch();
    const {businessId} = useParams();
    const business = useSelector(getBusiness(businessId));
    const [body, setBody] = useState('');
    const [rating, setRating] = useState(0);
    const [errors, setErrors] = useState([]);

    const toTop = () => {
        window.scrollTo(0, 0)
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setErrors([]);

        try {
            await dispatch(createReview({rating, body, business_id: businessId}))

            if (errors.length === 0) {
                nav(`/businesses/${businessId}`)
            }
        } catch (res) {
            let data; 
            try {
                data = JSON.parse(res.message);
            } catch {
                data = res.message;
            }

            if (data?.errors) setErrors(data.errors);
            else setErrors([res.statusText]);
        } 
        
        toTop();
    };

    const reviews = useSelector(state => {
        return Object.values(state.reviews).filter(review => review.businessId === businessId)
    })

    useEffect(() => {
        dispatch(fetchBusiness(businessId))
        dispatch(fetchReviews(businessId))
    }, [businessId])


    return (
        <div id="review-form-container">

            <form id="review-form">
                <h1 id="form-biz-name">{business.name}</h1>

                <ul id="review-form-errors">
                    {errors ? errors.map(error => <li key={error}>{error}</li>) : null}
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

                <button id="form-review-btn" type="submit" onClick={handleSubmit}>Post Review</button>
            </form>
        </div>
    )
}

export default ReviewForm;