import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBusinesses, fetchBusinesses } from "../../store/businessReducer";
import BusinessIndexItem from './BusinessIndexItem';

const BizIndex = () => {
    const dispatch = useDispatch();
    const businesses = useSelector(getBusinesses);

    useEffect(() => {
        dispatch(fetchBusinesses());
    }, [])

    const bizItems = businesses.map(biz => <BusinessIndexItem biz={biz} key={biz.id}/>)

    return (
        <>
            <ul id="biz-profile-container">
                {bizItems}
            </ul>
        </>
    )
}

export default BizIndex;
