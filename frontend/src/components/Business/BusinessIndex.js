import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBusinesses, fetchBusinesses } from "../../store/businessReducer";
import BusinessIndexItem from './BusinessIndexItem';

const BizIndex = () => {
    const dispatch = useDispatch();
    const businesses = useSelector(getBusinesses);
    debugger
    useEffect(() => {
        dispatch(fetchBusinesses(businesses));
    }, [])

    const bizItems = businesses.map(biz => <BusinessIndexItem biz={biz} />)

    return (
        <>
            <h1>my biz index</h1>
        </>
    )
}

export default BizIndex;
