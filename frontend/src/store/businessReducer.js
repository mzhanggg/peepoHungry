const RECEIVE_BUSINESS = 'businesses/RECEIVE_BUSINESS'
const RECEIVE_BUSINESSES = 'businesses/RECEIVE_BUSINESSES'

export const receiveBusiness = business => {
    return {
        type: RECEIVE_BUSINESS,
        business
    }
}

export const receiveBusinesses = businesses => {
    return {
        type: RECEIVE_BUSINESSES,
        businesses
    }
}

export const fetchBusinesses = () => async dispatch => {
    const res = await fetch('api/businesses');
    const businesses = await res.json();
    dispatch(receiveBusinesses(businesses));
}

export const fetchBusiness = (businessId) => async dispatch => {
    const res = await fetch(`api/businesses/${businessId}`);
    const business = await res.json();
    dispatch(receiveBusiness(business));
}
// // maybe add error handling?

export const getBusiness = (businessId) => state => {
    if (state.businesses) {
        return state.businesses[businessId];
    } else {
        return null;
    };
}

export const getBusinesses = (state) => state.businesses ? Object.values(state.businesses) : []

const businessesReducer = ( state = {}, action ) => {
    const newState = { ...state }

    switch (action.type) {
        case RECEIVE_BUSINESSES:
            return { ...state, ...action.business };
        case RECEIVE_BUSINESS:
            newState[action.business.id] = action.business;
            return newState;
        default: 
            return state;
    }
}

export default businessesReducer;