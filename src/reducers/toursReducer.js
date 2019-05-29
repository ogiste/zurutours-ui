import {
  FETCH_TOURS_SUCCESS,
  FETCH_TOURS_ERROR,
  FETCH_TOUR_SUCCESS,
  FETCH_TOUR_ERROR,
  UPDATE_TOUR_SUCCESS,
  UPDATE_TOUR_ERROR,
  TOUR_LOADING,
  CREATE_TOUR_SUCCESS,
  CREATE_TOUR_ERROR,
  SIGN_OUT, DELETE_TOUR_SUCCESS, DELETE_TOUR_ERROR,
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
        tours: [],
        message: undefined,
        current_tour: {},
        errorMessage: {},
        loading: false,
      };
    default:
      return state;
  }
}
