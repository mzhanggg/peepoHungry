import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
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

    console.log(query)
    const emptySearch = () => {
        if ( Object.keys(searchedBusinesses).length === 0 ) {
            return (
                <div id="empty-search">
                    <h2>No results for { query }</h2>
                    <ul>Suggestions for improving your results:
                        <li>Check the spelling or try alternate spellings</li>
                        <li>Try a more general search, e.g. "pizza" instead of "pepperoni"</li>
                    </ul>

                </div>
            )
        }
    }

    return (
        <>
            { emptySearch() }
            <ul id="biz-profile-container">
                {bizItems}
            </ul>
        </>
    )

}

export default SearchRes;