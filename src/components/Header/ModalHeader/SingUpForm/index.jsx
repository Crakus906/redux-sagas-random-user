import React, { useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { useHistory } from "react-router-dom";
import { PROFILE } from "../../../../constants/routes"

import './style.scss';
import { useDispatch } from 'react-redux';
import { user } from '../../../../redux/action/user';

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

export default function SingUpForm() {
  const dispatch = useDispatch()
  const history = useHistory()

  const onFinish = (values) => {
    history.push(PROFILE);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      className="form"
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
     <Form.Item
        name="email"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Sing In
        </Button>
      </Form.Item>
    </Form>
  );
}
