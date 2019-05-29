import {api} from '../services/Api';
import {
  CREATE_TOUR_ERROR,
  CREATE_TOUR_SUCCESS,
  FETCH_TOUR_ERROR,
  FETCH_TOUR_SUCCESS,
  TOUR_LOADING,
  UPDATE_TOUR_ERROR,
  UPDATE_TOUR_SUCCESS
} from './types';
import {failureMessage, loadingMessage, successMessage} from './authActions';

export const createTour = formProps => (dispatch) => {
  dispatch(loadingMessage(TOUR_LOADING));
  return api.tour.create(formProps)
      .then((response) => {
        dispatch(successMessage(response.data, CREATE_TOUR_SUCCESS));
      })
      .catch((error) => {
        dispatch(failureMessage(error.response.data, CREATE_TOUR_ERROR));
      });
};

export const updateTour = formProps => (dispatch) => {
  dispatch(loadingMessage(TOUR_LOADING));
  return api.tour.login(formProps)
      .then((response) => {
        dispatch(successMessage(response.data, UPDATE_TOUR_SUCCESS));
      })
      .catch((error) => {
        dispatch(failureMessage(error.response.data, UPDATE_TOUR_ERROR));
      });
};