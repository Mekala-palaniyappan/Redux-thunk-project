import actions from './actions';

const initState = {
   userListsData: [],
   userListsLoading: false,
   userDetailData: [],
   userDetailLoading: false,
   postDetails: undefined,
   postDetailsLoading: false,
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
                userListsData: action.payload
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
                userDetailData: action.payload
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
                postDetails: action.payload
            };
        }

        case actions.GET_POSTS_FAILURE: {
            return {
                ...state,
                postDetailsLoading: false,
            };
        }

        default:
            return state;
    }
}
