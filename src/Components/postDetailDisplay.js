import React, { Component } from 'react';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Modal, Form, Input, Button } from 'antd';
import LoaderComponent from './loaderComponent';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

class PostDetailDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      isShow: true,
    };
  }

  handleOk = values => {
    const { addCommentDetail, postId } = this.props;
    addCommentDetail(postId, values);
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  onShow = () => {
    const { getComments, postId } = this.props;
    this.setState({
      isShow: false,
    });
    getComments(postId);
  };

  onHide = () => {
    this.setState({
      isShow: true,
    });
  };

  onAdd = () => {
    this.setState({
      visible: true,
    });
  };

  render() {
    const {
        postDetailData,
        userId,
        userDetailData,
        commentsDetails,
        getCommentsLoader,
        addCommentLoader,
      } = this.props,
      { visible, isShow } = this.state;
    return (
      <div className="container detail">
        <div className={'header'}>
          <div
            onClick={() => (window.location.href = `/user/${userId}`)}
            className={'pointer'}
          >
            <ArrowLeftOutlined /> Back
          </div>
          <div>
            <h2>{userDetailData.name}</h2>
          </div>
          <div></div>
        </div>
        <div className={'body-content'}>
          <div>
            <h2>{postDetailData && postDetailData.title}</h2>
          </div>
          <p>{postDetailData && postDetailData.body}</p>
        </div>
        <div className={'comments'}>
          {isShow && (
            <div className={'action'}>
              <p className={'pointer'} onClick={this.onShow}>
                Show comments
              </p>
            </div>
          )}
          {!isShow && (
            <div className={'action'}>
              {' '}
              <p className={'pointer'} onClick={this.onHide}>
                Hide comments
              </p>{' '}
              <p className={'pointer'} onClick={this.onAdd}>
                Add comment
              </p>
            </div>
          )}
          {getCommentsLoader && <LoaderComponent />}
          {!isShow && commentsDetails ? (
            commentsDetails.length === 0 ? (
              <div>No comments found</div>
            ) : (
              commentsDetails.map((data, index) => (
                <div className={'comment'} key={index}>
                  <div className={'action'}>
                    <h4>{data.name}</h4>{' '}
                    <a href={`mailto:${data.email}`}>{data.email}</a>
                  </div>
                  <p>{data.body}</p>
                </div>
              ))
            )
          ) : (
            ''
          )}
        </div>
        <Modal
          title="Add Comment"
          visible={visible}
          footer={null}
          destroyOnClose={true}
          maskClosable={true}
          onCancel={this.handleCancel}
        >
          <Form {...layout} name="nest-messages" onFinish={this.handleOk}>
            <Form.Item
              name={['name']}
              label="Name"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={['email']}
              label="Email"
              rules={[{ type: 'email', required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={['body']}
              label="Body"
              rules={[{ required: true }]}
            >
              <Input.TextArea />
            </Form.Item>
            <Form.Item
              wrapperCol={{ ...layout.wrapperCol, offset: 8 }}
              className={'modal-action'}
            >
              <Button type="default" onClick={this.handleCancel}>
                Cancel
              </Button>
              <Button
                type="primary"
                htmlType="submit"
                loading={addCommentLoader}
              >
                Save
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }
}
export default PostDetailDisplay;
