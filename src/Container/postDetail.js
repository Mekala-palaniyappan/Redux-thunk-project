import React, { Component } from 'react';
import {
  addComment,
  getCommentsDetails,
  getPostDetails,
  getUserDetails,
} from '../redux/User/services';
import { connect } from 'react-redux';
import LoaderComponent from '../Components/loaderComponent';
import PostDetailDisplay from '../Components/postDetailDisplay';
import actions from '../redux/User/actions';

class PostDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: false,
      postId: false,
    };
  }

  componentDidMount() {
    const location = window.location.href.split('/'),
      { getPost, userDetail } = this.props;
    this.setState({
      userId: location[location.length - 3],
      postId: location[location.length - 1],
    });
    getPost(location[location.length - 1]);
    userDetail(location[location.length - 3]);
  }

  render() {
    const {
        postDetailLoading,
        postDetailData,
        userDetailData,
        getComments,
        commentsDetails,
        getCommentsLoader,
        addCommentLoader,
        addCommentDetail,
        commentModalVisible,
        setModalVisible,
      } = this.props,
      { userId, postId } = this.state;
    if (postDetailLoading) {
      return <LoaderComponent />;
    }
    return (
      <PostDetailDisplay
        postDetailData={postDetailData}
        userId={userId}
        postId={postId}
        userDetailData={userDetailData}
        getComments={getComments}
        commentsDetails={commentsDetails}
        getCommentsLoader={getCommentsLoader}
        addCommentLoader={addCommentLoader}
        addCommentDetail={addCommentDetail}
        commentModalVisible={commentModalVisible}
        setModalVisible={setModalVisible}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  userDetail: id => dispatch(getUserDetails(id)),
  getPost: id => dispatch(getPostDetails(id)),
  getComments: id => dispatch(getCommentsDetails(id)),
  addCommentDetail: (id, values) => dispatch(addComment(id, values)),
  setModalVisible: status =>
    dispatch({
      type: actions.SET_MODAL_VISIBLE,
      commentModalVisible: status,
    }),
});

const mapStateToProps = state => {
  const {
    postDetailLoading,
    postDetailData,
    userDetailData,
    commentsDetails,
    getCommentsLoader,
    addCommentLoader,
    commentModalVisible,
  } = state.User;
  return {
    postDetailLoading,
    postDetailData,
    userDetailData,
    commentsDetails,
    getCommentsLoader,
    addCommentLoader,
    commentModalVisible,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
