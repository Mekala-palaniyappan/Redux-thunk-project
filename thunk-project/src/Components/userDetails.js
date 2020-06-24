import React, {Component} from "react";
import { ArrowLeftOutlined, PlusCircleOutlined, DeleteOutlined, RightOutlined } from '@ant-design/icons';
import { Modal, Form, Input, Button } from 'antd';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

class UserDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };
    }

    handleOk = values => {
        const {addPost, id } = this.props;
        addPost(id, values);
    }

    handleCancel = () => {
        this.setState({
            visible: false
        })
    }

    onAdd = () => {
        this.setState({
            visible: true
        })
    }

    render() {
        const { userDetailData, postDetails } = this.props, { visible } = this.state;
        return (
            <div className="user-container detail">
                <div className={'header'}>
                    <div><ArrowLeftOutlined /> Back</div>
                    <div><h2>{userDetailData.name}</h2></div>
                    <div onClick={this.onAdd}><PlusCircleOutlined /></div>
                </div>
                <div className={'post-details'}>
                    {postDetails && postDetails.map((data,index) => (
                        <div className={'post'} key={index}> <DeleteOutlined />{data.title}<RightOutlined /></div>
                    ))
                    }
                </div>
                <Modal
                    title="Add Post"
                    visible={visible}
                    footer={null}
                >
                    <Form {...layout} name="nest-messages"  onFinish={this.handleOk}>
                        <Form.Item name={['title']} label="Title" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name={['body']} label="Body" rules={[{ required: true }]}>
                            <Input.TextArea />
                        </Form.Item>
                        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }} className={'modal-action'}>
                            <Button type="default" onClick={this.handleCancel}>
                                Cancel
                            </Button>
                            <Button type="primary" htmlType="submit">
                                Save
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        )
    }
}
export default UserDetails;