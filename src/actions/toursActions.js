import {api} from '../services/Api';
import {
  CREATE_TOUR_ERROR,
  CREATE_TOUR_SUCCESS,
  FETCH_TOUR_ERROR,
  FETCH_TOUR_SUCCESS,
  FETCH_TOURS_ERROR,
  FETCH_TOURS_SUCCESS,
  TOUR_LOADING,
  UPDATE_TOUR_ERROR,
  UPDATE_TOUR_SUCCESS
} from './types';
import {failureMessage, loadingMessage, successMessage} from './authActions';

export const fetchTours = () => (dispatch) => {
  dispatch(loadingMessage(TOUR_LOADING));
  return api.tour.list()
      .then((response) => {
        dispatch(successMessage(response.data, FETCH_TOURS_SUCCESS));
      })
      .catch((error) => {
        dispatch(failureMessage(error.response.data, FETCH_TOURS_ERROR));
      });
};

export const fetchTour = (tourId) => (dispatch) => {
  dispatch(loadingMessage(TOUR_LOADING));
  return api.tour.get(tourId)
      .then((response) => {
        dispatch(successMessage(response.data, FETCH_TOUR_SUCCESS));
      })
      .catch((error) => {
        dispatch(failureMessage(error.response.data, FETCH_TOUR_ERROR));
      });
};

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
  return api.tour.update(formProps)
      .then((response) => {
        dispatch(successMessage(response.data, UPDATE_TOUR_SUCCESS));
      })
      .catch((error) => {
        dispatch(failureMessage(error.response.data, UPDATE_TOUR_ERROR));
      });
};