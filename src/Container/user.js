import React, { Component } from 'react';
import { getUsers } from '../redux/User/services';
import { connect } from 'react-redux';
import UserLists from '../Components/userLists';
import LoaderComponent from '../Components/loaderComponent';

class UserContainer extends Component {
  componentDidMount() {
    const { userLists } = this.props;
    userLists();
  }

  render() {
    const { userListsData, userListsLoading } = this.props;
    if (userListsLoading) {
      return <LoaderComponent />;
    }
    return <UserLists userListsData={userListsData} />;
  }
}

const mapDispatchToProps = dispatch => ({
  userLists: () => dispatch(getUsers()),
});

const mapStateToProps = state => {
  const { userListsData, userListsLoading } = state.User;
  return { userListsData, userListsLoading };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
