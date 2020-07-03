import actions from './actions';

const initState = {
  userListsData: [],
  userListsLoading: false,
  userDetailData: [],
  userDetailLoading: false,
  postDetails: undefined,
  postDetailsLoading: false,
  deletePostLoading: false,
  addPostLoading: false,
  postDetailLoading: false,
  postDetailData: undefined,
  getCommentsLoader: false,
  commentsDetails: undefined,
  addCommentLoader: false,
  removedIds: [],
  postModalVisible: false,
  commentModalVisible: false,
};

export default function userReducer(state = initState, action) {
  switch (action.type) {
    case actions.GET_USER: {
      return {
        ...state,
        userListsLoading: true,
      };
    }

    case actions.GET_USER_SUCCESS: {
      return {
        ...state,
        userListsLoading: false,
        userListsData: action.payload,
      };
    }

    case actions.GET_USER_FAILURE: {
      return {
        ...state,
        userListsLoading: false,
      };
    }

    case actions.GET_USER_DETAILS: {
      return {
        ...state,
        userDetailLoading: true,
      };
    }

    case actions.GET_USER_DETAILS_SUCCESS: {
      return {
        ...state,
        userDetailLoading: false,
        userDetailData: action.payload,
      };
    }

    case actions.GET_USER_DETAILS_FAILURE: {
      return {
        ...state,
        userDetailLoading: false,
      };
    }

    case actions.GET_POSTS: {
      return {
        ...state,
        postDetailsLoading: true,
      };
    }

    case actions.GET_POSTS_SUCCESS: {
      return {
        ...state,
        postDetailsLoading: false,
        postDetails: action.payload,
      };
    }

    case actions.GET_POSTS_FAILURE: {
      return {
        ...state,
        postDetailsLoading: false,
      };
    }

    case actions.DELETE_POST: {
      return {
        ...state,
        deletePostLoading: true,
      };
    }

    case actions.DELETE_POST_SUCCESS: {
      return {
        ...state,
        deletePostLoading: false,
        removedIds: action.removedIds,
      };
    }

    case actions.DELETE_POST_FAILURE: {
      return {
        ...state,
        deletePostLoading: false,
      };
    }

    case actions.ADD_POST: {
      return {
        ...state,
        addPostLoading: true,
      };
    }

    case actions.ADD_POST_SUCCESS: {
      let addDetail = state.postDetails;
      addDetail.push(action.payload);
      return {
        ...state,
        addPostLoading: false,
        postDetails: addDetail,
      };
    }

    case actions.ADD_POST_FAILURE: {
      return {
        ...state,
        addPostLoading: false,
      };
    }

    case actions.GET_POST_DETAILS: {
      return {
        ...state,
        postDetailLoading: true,
      };
    }

    case actions.GET_POST_DETAILS_SUCCESS: {
      const { payload } = action;
      return {
        ...state,
        postDetailLoading: false,
        postDetailData: payload,
      };
    }

    case actions.GET_POST_DETAILS_FAILURE: {
      return {
        ...state,
        postDetailLoading: false,
      };
    }

    case actions.GET_COMMENTS: {
      return {
        ...state,
        getCommentsLoader: true,
      };
    }

    case actions.GET_COMMENTS_SUCCESS: {
      const { payload } = action;
      return {
        ...state,
        getCommentsLoader: false,
        commentsDetails: payload,
      };
    }

    case actions.GET_COMMENTS_FAILURE: {
      return {
        ...state,
        getCommentsLoader: false,
      };
    }

    case actions.ADD_COMMENT: {
      return {
        ...state,
        addCommentLoader: true,
      };
    }

    case actions.ADD_COMMENT_SUCCESS: {
      let addCommentDetail = state.commentsDetails;
      addCommentDetail.push(action.payload);
      return {
        ...state,
        addCommentLoader: false,
        commentsDetails: addCommentDetail,
      };
    }

    case actions.ADD_COMMENT_FAILURE: {
      return {
        ...state,
        addCommentLoader: false,
      };
    }

    case actions.SET_MODAL_VISIBLE: {
      const { postModalVisible, commentModalVisible } = action;
      return {
        ...state,
        postModalVisible: [true, false].includes(postModalVisible)
          ? postModalVisible
          : state.postModalVisible,
        commentModalVisible: [true, false].includes(commentModalVisible)
          ? commentModalVisible
          : state.commentModalVisible,
      };
    }

    default:
      return state;
  }
}
