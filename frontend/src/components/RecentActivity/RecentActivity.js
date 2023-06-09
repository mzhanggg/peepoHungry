import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReviews } from '../../store/reviewReducer';
import RecentActivityItem from './RecentActivityItem';
import './RecentActivity.css'

const RecentActivities = () => {
    const dispatch = useDispatch();
    const reviews = useSelector(store => store.reviews)
    const reviewIds = Object.keys(reviews);
    const lastFourReviewIds = reviewIds.slice(-4);
    const lastFourReviews = lastFourReviewIds.map(reviewId => reviews[reviewId]);
    
    const recentItems = lastFourReviews.map(rev => <RecentActivityItem rev={rev} key={rev.id}/>);
    
    useEffect(() => {
        dispatch(fetchReviews())
    }, [])


    return (
        <div id="recent-activities">
            <h1 id="recent-title">Recent Activity</h1>

            <div id="activity-boxes">
                {recentItems}
            </div>
        </div>
    )
}

export default RecentActivities;