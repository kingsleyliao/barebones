import axios from 'axios';
import { FETCH_USER, TOGGLE_MODAL } from './types';

export const signUp = (data) => async dispatch => {
  const res = await axios.post('/api/signup', data);

  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
};

export const login = (data) => async dispatch => {
  const res = await axios.post('/api/login', data);

  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
};

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
};

export const updateUser = (data, history) => async dispatch => {
  const res = await axios.patch('/api/user', data);

  history.push('/home');
  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
};

export const toggleModal = (bool, Component) => dispatch => {
  console.log(Component)
  dispatch({
    type: TOGGLE_MODAL,
    isModalOpen: bool,
    Component: Component
  });
};
