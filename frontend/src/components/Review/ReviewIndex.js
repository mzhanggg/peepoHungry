import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchReviews } from "../../store/reviewReducer";
import ReviewIndexItem from './ReviewIndexItem';
import './ReviewIndex.css'

const ReviewIndex = () => {
    const dispatch = useDispatch();
    const { businessId } = useParams();

    const reviews = useSelector(state => {
        return Object.values(state.reviews).filter(review => review.businessId === Number(businessId))
    })

    useEffect(() => {
        dispatch(fetchReviews(businessId))
    }, [businessId])

    const reviewItems = reviews.map(rev => <ReviewIndexItem rev={rev} key={rev.id}/>)

    return (
        <>
            <ul id="review-container">
                {reviewItems}
            </ul>
        </>
    )
}

export default ReviewIndex;