import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const BusinessIndexItem = ({biz}) => {

    return (
        <ul id="biz-show">
            <NavLink to={`/businesses/${biz.id}`}>{biz.name}</NavLink>
        </ul>
    )

}

export default BusinessIndexItem;