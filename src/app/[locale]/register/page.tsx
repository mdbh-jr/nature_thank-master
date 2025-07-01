/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { Button, Input, Form, message } from "antd";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import NtButton from "@/CommonComponents/NtButton";

const Page = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Success:", values);
    message.success("Account created successfully!");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
    message.error("Please correct the errors in the form.");
  };

  const validatePassword = (_: any, value: any) => {
    if (!value) {
      return Promise.reject("Please input your password!");
    }
    if (value.length < 8) {
      return Promise.reject("Password must be at least 8 characters long");
    }
    if (!/\d/.test(value)) {
      return Promise.reject("Password must contain at least one number");
    }
    if (!/[A-Z]/.test(value)) {
      return Promise.reject(
        "Password must contain at least one uppercase letter"
      );
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
      return Promise.reject(
        "Password must contain at least one special character"
      );
    }
    return Promise.resolve();
  };

  return (
    <div className="flex h-screen bg-green-400">
      <div className="w-1/2 p-12 flex flex-col justify-center items-start">
        <h1 className="text-4xl font-bold text-white mb-4">
          Nature Thanks Herbs
        </h1>
        <div className="text-6xl font-cursive text-white">
          Nature
          <br />
          Thank
        </div>
      </div>
      <div className="w-1/2 bg-white p-12 flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-8">Create Account</h2>
        <div className="flex justify-between space-x-2 mb-8">
          <Button icon={<FcGoogle />} className="w-1/2">
            Sign up with Google
          </Button>
          <Button icon={<FaFacebook />} className="w-1/2">
            Sign up with Facebook
          </Button>
        </div>
        <div className="text-center text-gray-500 mb-8">- OR -</div>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className=""
        >
          <Form.Item
            name="fullName"
            label="Full name"
            rules={[
              { required: true, message: "Please input your full name!" },
              { min: 2, message: "Name must be at least 2 characters long" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email Address"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Please enter a valid email address!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[{ validator: validatePassword }]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject("The two passwords do not match!");
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item className="flex justify-center">
            <NtButton
              htmlType="submit"
              type="primary"
              className=" px-[100px] py-5 rounded-xl"
            >
              Create Account
            </NtButton>
          </Form.Item>
        </Form>
        <div className="text-center">
          Already have an account?{" "}
          <a href="#" className="text-green-500">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Page;
