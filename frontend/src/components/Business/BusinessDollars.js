import { useParams } from 'react-router-dom';
import { getBusiness } from "../../store/businessReducer";
import { useSelector } from 'react-redux';

const BusinessDollar = () => {
    const {businessId} = useParams();
    const business = useSelector(getBusiness(businessId));

    const dollars = () => {
        switch (business.priceRange) {
            case 25: 
                return '$';
            case 50:
                return '$$';
            case 75:
                return '$$$';
            case 100: 
                return '$$$$';
        };
    };

    return (
        <p>{dollars()}</p>
    )

};

export default BusinessDollar;