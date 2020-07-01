import React, { Component } from 'react';
import {
  addPost,
  getPost,
  getUserDetails,
  deletePost,
} from '../redux/User/services';
import { connect } from 'react-redux';
import UserDetails from '../Components/userDetails';
import LoaderComponent from '../Components/loaderComponent';

class UserDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: false,
    };
  }

  componentDidMount() {
    const location = window.location.href.split('/'),
      { userDetail, getPost } = this.props;
    this.setState({
      id: location[location.length - 1],
    });
    getPost();
    userDetail(location[location.length - 1]);
  }

  render() {
    const {
        userDetailData,
        userDetailLoading,
        addPost,
        postDetails,
        deletePostLoading,
        onDelete,
        addPostLoading,
      } = this.props,
      { id } = this.state;
    if (userDetailLoading) {
      return <LoaderComponent />;
    }
    return (
      <UserDetails
        userDetailData={userDetailData}
        addPost={addPost}
        id={id}
        postDetails={postDetails}
        deletePostLoading={deletePostLoading}
        onDelete={onDelete}
        addPostLoading={addPostLoading}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  userDetail: id => dispatch(getUserDetails(id)),
  addPost: (id, values) => dispatch(addPost(id, values)),
  getPost: id => dispatch(getPost()),
  onDelete: id => dispatch(deletePost(id)),
});

const mapStateToProps = state => {
  const {
    userDetailData,
    userDetailLoading,
    postDetails,
    deletePostLoading,
    addPostLoading,
  } = state.User;
  return {
    userDetailData,
    userDetailLoading,
    postDetails,
    deletePostLoading,
    addPostLoading,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);
