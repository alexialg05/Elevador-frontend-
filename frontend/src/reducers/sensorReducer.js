import {
  SENSOR_LIST_REQUEST,
  SENSOR_LIST_SUCCESS,
  SENSOR_LIST_FAIL,
  SENSOR_LIST_RESET,
  SENSOR_DETAILS_REQUEST,
  SENSOR_DETAILS_SUCCESS,
  SENSOR_DETAILS_FAIL,
  SENSOR_DETAILS_RESET,
} from '../constants/sensorConstants';

// Desc: Reducer for sensor actions
// Params: state, action
// Returns: State of sensor actions
export const sensorListReducer = (state = { sensors: [] }, action) => {
  switch (action.type) {
    case SENSOR_LIST_REQUEST:
      return { loading: true, sensors: [] };
    case SENSOR_LIST_SUCCESS:
      return { loading: false, success: true, sensors: action.payload };
    case SENSOR_LIST_FAIL:
      return { loading: false, error: action.payload };
    case SENSOR_LIST_RESET:
      return { sensors: [] };
    default:
      return state;
  }
};

// Desc: Reducer for sensor details
// Params: state, action
// Returns: State of sensor details
export const sensorDetailsReducer = (state = { sensor: {} }, action) => {
  switch (action.type) {
    case SENSOR_DETAILS_REQUEST:
      return { loading: true, ...state };
    case SENSOR_DETAILS_SUCCESS:
      return { loading: false, success: true, sensor: action.payload };
    case SENSOR_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    case SENSOR_DETAILS_RESET:
      return { sensor: {} };
    default:
      return state;
  }
};
