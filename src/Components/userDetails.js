import React, { Component } from 'react';
import {
  ArrowLeftOutlined,
  PlusCircleOutlined,
  DeleteOutlined,
  RightOutlined,
} from '@ant-design/icons';
import { Modal, Form, Input, Button } from 'antd';
import LoaderComponent from './loaderComponent';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      indexId: false,
    };
  }

  handleOk = values => {
    const { addPost, id } = this.props;
    addPost(id, values);
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  onAdd = () => {
    this.setState({
      visible: true,
    });
  };

  onDelete = id => {
    const { onDelete } = this.props;
    let removeIds = [];
    removeIds.push(id);
    this.setState({
      indexId: id,
    });
    onDelete(id, removeIds);
  };

  render() {
    const {
        userDetailData,
        postDetails,
        deletePostLoading,
        addPostLoading,
        id,
        removedIds,
      } = this.props,
      { visible, indexId } = this.state;
    return (
      <div className="container detail">
        <div className={'header'}>
          <div
            onClick={() => (window.location.href = '/')}
            className={'pointer'}
          >
            <ArrowLeftOutlined /> Back
          </div>
          <div>
            <h2>{userDetailData.name}</h2>
          </div>
          <div onClick={this.onAdd}>
            <PlusCircleOutlined />
          </div>
        </div>
        <div className={'post-details'}>
          {postDetails &&
            postDetails.map(
              (data, index) =>
                !removedIds.includes(data.id) && (
                  <div className={'post'} key={index}>
                    <span
                      className={'pointer'}
                      onClick={() => this.onDelete(data.id)}
                    >
                      {deletePostLoading && indexId === data.id ? (
                        <LoaderComponent />
                      ) : (
                        <DeleteOutlined />
                      )}
                    </span>
                    {data.title}
                    <span
                      className={'pointer'}
                      onClick={() =>
                        (window.location.href = `/user/${id}/post/${data.id}`)
                      }
                    >
                      <RightOutlined />
                    </span>
                  </div>
                ),
            )}
        </div>
        <Modal
          title="Add Post"
          visible={visible}
          footer={null}
          destroyOnClose={true}
          maskClosable={true}
          onCancel={this.handleCancel}
        >
          <Form {...layout} name="nest-messages" onFinish={this.handleOk}>
            <Form.Item
              name={['title']}
              label="Title"
              rules={[{ required: true }]}
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
              <Button type="primary" htmlType="submit" loading={addPostLoading}>
                Save
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }
}
export default UserDetails;
