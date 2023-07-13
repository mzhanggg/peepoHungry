import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";
import { fetchSearchBusinesses } from '../../store/businessReducer';
import BusinessIndexItem from '../Business/BusinessIndexItem';

const SearchRes = () => {
    const { query } = useParams()
    const dispatch = useDispatch();

    const searchedBusinesses = useSelector(state => state.businesses)
    
    const bizItems = Object.values(searchedBusinesses).map(biz => <BusinessIndexItem biz={biz} key={biz.id}/>)

    useEffect(() => {
        dispatch(fetchSearchBusinesses(query))
    }, [query])

    return (
        <>
            <ul id="biz-profile-container">
                {bizItems}
            </ul>
        </>
    )

}

export default SearchRes;