import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBusinesses, fetchBusinesses } from "../../store/businessReducer";
import BusinessIndexItem from './BusinessIndexItem';

const BizIndex = () => {
    const dispatch = useDispatch();
    const businesses = useSelector(getBusinesses);

    useEffect(() => {
        dispatch(fetchBusinesses(businesses));
    }, [])

    const bizItems = businesses.map(biz => <BusinessIndexItem biz={biz} key={biz.id}/>)

    return (
        <>
            <ul>
                {bizItems}
            </ul>
        </>
    )
}

export default BizIndex;
