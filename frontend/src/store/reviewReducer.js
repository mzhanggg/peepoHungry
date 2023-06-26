import { csrfFetch } from "./csrf";

const RECEIVE_REVIEW = 'reviews/RECEIVE_REVIEW';
const RECEIVE_REVIEWS = 'reviews/RECEIVE_REVIEWS';
const REMOVE_REVIEW = 'reviews/REMOVE_REVIEW';

export const receiveReview = review => {
    return {
        type: RECEIVE_REVIEW,
        review
    }
}

export const receiveReviews = reviews => {
    return {
        type: RECEIVE_REVIEWS, 
        reviews
    }
}

export const removeReview = reviewId => {
    return {
        type: REMOVE_REVIEW, 
        reviewId
    }
}

export const getReview = (reviewId) => (state) => {
    if (state.reviews) {
        return state.reviews[reviewId]
    } else {
        return null
    }
}

export const getReviews = (state) => state.reviews ? Object.values(state.reviews) : []

export const fetchReviews = (businessId) => async dispatch => {
    const res = await csrfFetch(`/api/businesses/${businessId}/reviews`);
    const data = await res.json();
    dispatch(receiveReviews(data));
}

export const fetchReview = (reviewId) => async dispatch => {
    const res = await csrfFetch(`/api/reviews/${reviewId}`);
    const data = await res.json();
    dispatch(receiveReview(data));
}

export const createReview = (review, businessId) => async dispatch => {
    const res = await csrfFetch('/api/reviews/', {
        method: "POST",
        body: JSON.stringify(review)
    })

    if (res.ok) {
        const data = await res.json();
        dispatch(receiveReview(data));
    } else {
        const errorRes = await res.json();
        throw new Error(JSON.stringify(errorRes))
    }
 
}

export const updateReview = (review, reviewId) => async dispatch => {
    const res = await csrfFetch(`/api/reviews/${reviewId}`,  {
        method: "PATCH",
        body: JSON.stringify(review)
    })
    const data = await res.json();
    dispatch(receiveReview(data));
}

export const deleteReview = (reviewId) => async dispatch => {
    const res = await csrfFetch(`/api/reviews/${reviewId}`,  {
        method: "DELETE"
    })
    dispatch(removeReview(reviewId))
}

const reviewsReducer = (state = {}, action) => {
    const newState = {...state}

    switch(action.type) {
        case RECEIVE_REVIEWS:
            return {...newState, ...action.reviews}
        case RECEIVE_REVIEW:
            newState[action.review.id] = action.review
            return newState;
        case REMOVE_REVIEW: 
            delete newState[action.reviewId]
            return newState;
        default: 
            return state;
    }
}

export default reviewsReducer;