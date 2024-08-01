import { useState, useEffect } from "react";
import { Form, Input, Button, message, Select } from "antd";
import "./App.css";

function App() {
  const [form] = Form.useForm();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  return (
    <div className="max-w-xl mx-auto p-8 bg-white rounded-lg shadow-md">
      {!isMobile && (
        <h1 className="text-xl font-bold text-[#252B42] mb-2 text-center">
          Contact Us
        </h1>
      )}
      <h2 className="text-4xl font-bold text-[#252B42] mb-8 text-center">
        {isMobile ? "Book Appointment" : "Make an Appointment"}
      </h2>
      <Form
        form={form}
        name="appointment"
        onFinish={onFinish}
        layout="vertical"
        initialValues={{ remember: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col w-full">
            {isMobile && (
              <label className="text-sm text-[#252B42] mb-1 font-bold">
                Name *
              </label>
            )}
            <Form.Item
              name="fullName"
              rules={[
                { required: true, message: "Please enter your full name" },
              ]}
              className="w-full"
            >
              <Input
                placeholder="Full Name *"
                className="w-full bg-[#F9F9F9] h-12"
              />
            </Form.Item>
          </div>
          <div className="flex flex-col w-full">
            {isMobile && (
              <label className="text-sm text-[#252B42] mb-1 font-bold">
                Email Address*
              </label>
            )}
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Please enter your valid email" },
              ]}
              className="w-full"
            >
              <Input
                placeholder="example@gmail.com *"
                className="w-full bg-[#F9F9F9] h-12"
              />
            </Form.Item>
          </div>
          <div className="flex flex-col w-full">
            {isMobile && (
              <label className="text-sm text-[#252B42] mb-1 font-bold">
                Department*
              </label>
            )}
            <Form.Item
              name="service"
              rules={[{ required: true, message: "Please select a service" }]}
              className="w-full"
            >
              <Select
                placeholder="Please Select"
                className="w-full"
                style={{ backgroundColor: "#F9F9F9", height: "48px" }}
              ></Select>
            </Form.Item>
          </div>
          <div className="flex flex-col w-full">
            {isMobile && (
              <label className="text-sm text-[#252B42] mb-1 font-bold">
                Time *
              </label>
            )}
            <Form.Item
              name="time"
              rules={[{ required: true, message: "Please select a time" }]}
              className="w-full"
            >
              <Select
                placeholder="4:00 Available"
                className="w-full bg-[#F9F9F9]"
                style={{ height: "48px" }}
              ></Select>
            </Form.Item>
          </div>
        </div>
        {!isMobile && (
          <div className="flex flex-col w-full">
            {isMobile && (
              <label className="text-sm text-[#252B42] mb-1">Message</label>
            )}
            <Form.Item name="message" className="w-full">
              <Input.TextArea
                placeholder="Message"
                rows={5}
                className="bg-[#F9F9F9]"
              />
            </Form.Item>
          </div>
        )}
        <Form.Item>
  <div className="flex justify-center">
    <Button
      type="primary"
      htmlType="submit"
      className="font-bold h-14 bg-[#23A6F0] hover:bg-blue-600 w-full md:w-1/2"
    >
      Book Appointment
    </Button>
  </div>
</Form.Item>

      </Form>
    </div>
  );
}

export default App;
