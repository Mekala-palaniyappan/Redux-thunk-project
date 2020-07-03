import axios from 'axios';
import actions from './actions';
import { message } from 'antd';

export const getUsers = () => dispatch => {
  dispatch({
    type: actions.GET_USER,
  });
  axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      dispatch({
        type: actions.GET_USER_SUCCESS,
        payload: response.data,
      });
    })
    .catch(function(error) {
      // handle error
      message.error('Something went wrong');
      dispatch({
        type: actions.GET_USER_FAILURE,
      });
    });
};

export const getUserDetails = id => dispatch => {
  dispatch({
    type: actions.GET_USER_DETAILS,
  });
  axios
    .get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => {
      dispatch({
        type: actions.GET_USER_DETAILS_SUCCESS,
        payload: response.data,
      });
    })
    .catch(function(error) {
      // handle error
      message.error('Something went wrong');
      dispatch({
        type: actions.GET_USER_DETAILS_FAILURE,
      });
    });
};

export const addPost = (id, values) => dispatch => {
  dispatch({
    type: actions.ADD_POST,
  });
  axios
    .post('https://jsonplaceholder.typicode.com/posts', values, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then(response => {
      dispatch({
        type: actions.ADD_POST_SUCCESS,
        payload: values,
      });
      message.success('Post Added Successfully');
      dispatch({
        type: actions.SET_MODAL_VISIBLE,
        postModalVisible: false,
      });
    })
    .catch(function(error) {
      // handle error
      message.error('Something went wrong');
      dispatch({
        type: actions.ADD_POST_FAILURE,
      });
    });
};

export const getPost = id => dispatch => {
  dispatch({
    type: actions.GET_POSTS,
  });
  axios
    .get(`https://jsonplaceholder.typicode.com/posts${id ? `/${id}` : ''}`)
    .then(response => {
      dispatch({
        type: actions.GET_POSTS_SUCCESS,
        payload: response.data,
      });
    })
    .catch(function(error) {
      // handle error
      message.error('Something went wrong');
      dispatch({
        type: actions.GET_POSTS_FAILURE,
      });
    });
};

export const deletePost = (id, ids) => dispatch => {
  dispatch({
    type: actions.DELETE_POST,
  });
  axios
    .delete(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then(response => {
      dispatch({
        type: actions.DELETE_POST_SUCCESS,
        removedIds: ids,
      });
      dispatch(getPost());
      message.success('Post Deleted Successfully');
    })
    .catch(function(error) {
      // handle error
      message.error('Something went wrong');
      dispatch({
        type: actions.DELETE_POST_FAILURE,
      });
    });
};

export const getPostDetails = userId => dispatch => {
  dispatch({
    type: actions.GET_POST_DETAILS,
  });
  axios
    .get(`https://jsonplaceholder.typicode.com/posts/${userId}`)
    .then(response => {
      dispatch({
        type: actions.GET_POST_DETAILS_SUCCESS,
        payload: response.data,
      });
    })
    .catch(function(error) {
      // handle error
      message.error('Something went wrong');
      dispatch({
        type: actions.GET_POST_DETAILS_FAILURE,
      });
    });
};

export const getCommentsDetails = id => dispatch => {
  dispatch({
    type: actions.GET_COMMENTS,
  });
  axios
    .get(`https://jsonplaceholder.typicode.com/posts/${id}/comments/`)
    .then(response => {
      dispatch({
        type: actions.GET_COMMENTS_SUCCESS,
        payload: response.data,
      });
    })
    .catch(function(error) {
      // handle error
      message.error('Something went wrong');
      dispatch({
        type: actions.GET_COMMENTS_FAILURE,
      });
    });
};

export const addComment = (id, values) => dispatch => {
  dispatch({
    type: actions.ADD_COMMENT,
  });
  axios
    .post(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments/`,
      values,
      {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      },
    )
    .then(response => {
      dispatch({
        type: actions.ADD_COMMENT_SUCCESS,
        payload: values,
      });
      message.success('Comment Added Successfully');
      dispatch({
        type: actions.SET_MODAL_VISIBLE,
        commentModalVisible: false,
      });
    })
    .catch(function(error) {
      // handle error
      message.error('Something went wrong');
      dispatch({
        type: actions.ADD_COMMENT_FAILURE,
      });
    });
};
