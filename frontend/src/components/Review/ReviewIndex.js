import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ReviewIndex = () => {
    const dispatch = useDispatch();
    const {businessId} = useParams();
    const reviews = useSelector(state => {
        return Object.values(state.reviews).filter(review => review.businessId === businessId)
    })


    return (
        <>
            <h1>my reviews</h1>
            {console.log(reviews)}
        </>
    )
}

export default ReviewIndex;