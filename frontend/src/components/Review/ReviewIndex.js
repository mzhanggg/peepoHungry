import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchReviews } from "../../store/reviewReducer";
import ReviewIndexItem from './ReviewIndexItem';

const ReviewIndex = () => {
    const dispatch = useDispatch();
    const { businessId } = useParams();

    const reviews = useSelector(state => {
        return Object.values(state.reviews).filter(review => review.businessId === Number(businessId))
    })

    useEffect(() => {
        dispatch(fetchReviews(businessId))
    }, [businessId])

    // const reviewItems = reviews.map(rev => )

    return (
        <>
            {console.log(businessId)}
            {console.log(reviews)}
            <h1>my reviews</h1>
        </>
    )
}

export default ReviewIndex;