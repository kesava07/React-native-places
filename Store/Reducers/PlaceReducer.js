import * as actionTypes from '../Actions/ActionsTypes';
import PlaceImage from '../../Images/avenger.png';

const initialState = {
    places: [],
    selectedPlace: null
}
const placesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_PALCE:
            return {
                ...state,
                places: state.places.concat({
                    key: Math.random().toString(),
                    name: action.payload,
                    image: PlaceImage
                })
            };
        case actionTypes.DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter(place => {
                    return place.key !== state.selectedPlace.key;
                }),
                selectedPlace: null
            };
        case actionTypes.SELECT_PLACE:
            return {
                ...state,
                selectedPlace: state.places.find(place => {
                    return place.key === action.payload;
                })
            };
        case actionTypes.UN_SELECT_PLACE:
            return {
                ...state,
                selectedPlace: null
            }
        default: return state;
    }
};

export default placesReducer;