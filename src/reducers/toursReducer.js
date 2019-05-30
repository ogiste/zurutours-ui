import {
  CREATE_TOUR_ERROR,
  CREATE_TOUR_SUCCESS,
  DELETE_TOUR_ERROR,
  DELETE_TOUR_SUCCESS,
  FETCH_TOUR_ERROR,
  FETCH_TOUR_SUCCESS,
  FETCH_TOURS_ERROR,
  FETCH_TOURS_SUCCESS,
  SIGN_OUT,
  TOUR_LOADING,
  UPDATE_TOUR_ERROR,
  UPDATE_TOUR_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = {
  tours: [],
  message: undefined,
  current_tour: {},
  errorMessage: {},
  loading: false,
};

export default function (state = INITIAL_STATE, actions) {
  switch (actions.type) {
    case TOUR_LOADING:
      return {
        ...state,
        errorMessage: {},
        loading: true,
      };
    case FETCH_TOURS_SUCCESS:
      return {
        ...state,
        tours: actions.payload,
        errorMessage: {},
        loading: false,
      };
    case FETCH_TOURS_ERROR:
      return {
        ...state,
        message: undefined,
        errorMessage: actions.payload,
        loading: false,
      };
    case  CREATE_TOUR_SUCCESS:
      return {
        ...state,
        message: 'Tour has been created!',
        current_tour: actions.payload,
        errorMessage: {},
        loading: false,
      };
    case CREATE_TOUR_ERROR:
      return {
        ...state,
        message: undefined,
        errorMessage: actions.payload,
        loading: false,
      };
    case FETCH_TOUR_SUCCESS:
      return {
        ...state,
        current_tour: actions.payload,
        errorMessage: {},
        loading: false,
      };
    case FETCH_TOUR_ERROR:
      return {
        ...state,
        message: undefined,
        errorMessage: actions.payload,
        loading: false,
      };
    case UPDATE_TOUR_SUCCESS:
      return {
        ...state,
        current_tour: actions.payload,
        loading: false,
      };
    case UPDATE_TOUR_ERROR:
      return {
        ...state,
        message: undefined,
        errorMessage: actions.payload,
        loading: false,
      };
    case DELETE_TOUR_SUCCESS:
      return {
        ...state,
        current_tour: actions.payload,
        loading: false,
      };
    case DELETE_TOUR_ERROR:
      return {
        ...state,
        message: undefined,
        errorMessage: actions.payload,
        loading: false,
      };
    case SIGN_OUT:
      return {
        ...state,
        message: undefined,
        errorMessage: {},
        loading: false,
      };
    default:
      return state;
  }
}
