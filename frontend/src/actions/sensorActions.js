import axios from 'axios';
import {
  SENSOR_LIST_REQUEST,
  SENSOR_LIST_SUCCESS,
  SENSOR_LIST_FAIL,
  SENSOR_DETAILS_REQUEST,
  SENSOR_DETAILS_SUCCESS,
  SENSOR_DETAILS_FAIL,
} from '../constants/sensorConstants';

// Desc: Action to list all sensors
// Params: None
// Returns: Dispatches an action to get all sensors
export const listSensors = () => async (dispatch) => {
  try {
    dispatch({ type: SENSOR_LIST_REQUEST });

    const { data } = await axios.get('/api/sensor/all');

    dispatch({
      type: SENSOR_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SENSOR_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// Desc: Action to get a sensor by ID
// Params: sensorId
// Returns: Dispatches an action to get a sensor by ID
export const detailsSensor = (sensorId) => async (dispatch) => {
  try {
    dispatch({ type: SENSOR_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/sensor/${sensorId}`);

    dispatch({
      type: SENSOR_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SENSOR_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
