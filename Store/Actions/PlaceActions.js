import * as actionTypes from './ActionsTypes';

export const addPlace = (place) => ({
    type: actionTypes.ADD_PALCE,
    payload: place
});

export const deletePlace = () => ({
    type: actionTypes.DELETE_PLACE,
});

export const selectPlace = (key) => ({
    type: actionTypes.SELECT_PLACE,
    payload: key
});

export const unSelectPlace = () => ({
    type: actionTypes.UN_SELECT_PLACE
});