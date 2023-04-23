import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button, Select, Form, message, Divider, Card } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import Layout from "../components/Layout";

const { Option } = Select;

const Insurance = () => {
  const navigate = useNavigate();

  const [insurancePlans, setInsurancePlans] = useState([]);
  const [insuranceProvider, setInsuranceProvider] = useState("");
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchInsuranceData = async () => {
      try {
        const response = await fetch("/api/insurance");
        const data = await response.json();
        setInsurancePlans(data.insurancePlans);
        setInsuranceProvider(data.insuranceProvider);
      } catch (error) {
        console.error(error);
      }
    };

    fetchInsuranceData();
  }, []);

  const handlePlanChange = (value) => {
    setSelectedPlan(value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleGenderChange = (value) => {
    setGender(value);
  };

  const handlePlanSelection = (plan) => {
    setSelectedPlan(plan);
  };

  const handleBuyInsurance = async () => {
    setIsLoading(true);

    try {
      // TODO: Call an API to submit the insurance application
      // with the selected plan and patient details

      message.success("Your insurance application has been submitted!");
    } catch (error) {
      console.error(error);
      message.error(
        "Failed to submit your insurance application. Please try again later."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleChat = () => {
    // TODO: Implement a chat feature using a third-party chat service
    // that connects patients and insurance providers

    message.success("You have joined the chat with your insurance provider!");
  };

  return (
    <Layout>
      <div className="container">
        <h1 style={{ textAlign: "center" }}>Insurance Plans</h1>
        <Divider />

        <div className="row">
          <div className="col-md-6">
            <h2>Available Plans</h2>
            <p>
              You have selected <strong>{selectedPlan}</strong> package plan.
            </p>
            <h3>Select your plan:</h3>
            <div className="mb-3">
              <Button
                type={selectedPlan === "basic" ? "primary" : "default"}
                onClick={() => handlePlanSelection("basic")}
                disabled={selectedPlan === "basic"}
              >
                Basic
              </Button>
              <Button
                type={selectedPlan === "standard" ? "primary" : "default"}
                onClick={() => handlePlanSelection("standard")}
                disabled={selectedPlan === "standard"}
              >
                Standard
              </Button>
              <Button
                type={selectedPlan === "premium" ? "primary" : "default"}
                onClick={() => handlePlanSelection("premium")}
                disabled={selectedPlan === "premium"}
              >
                Premium
              </Button>
            </div>

            <Card title="Patient Details">
              <Form layout="card">
                <Form.Item label="Name">
                  <Input value={name} onChange={handleNameChange} />
                </Form.Item>
                <Form.Item label="Age">
                  <Input type="number" value={age} onChange={handleAgeChange} />
                </Form.Item>
                <Form.Item label="Gender">
                  <Select
                    placeholder="Select gender"
                    onChange={handleGenderChange}
                  >
                    <Option value="male">Male</Option>
                    <Option value="female">Female</Option>
                    <Option value="other">Other</Option>
                  </Select>
                </Form.Item>
              </Form>
            </Card>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button
                type="primary"
                icon={<CheckOutlined />}
                onClick={handleBuyInsurance}
                loading={isLoading}
              >
                Buy Insurance
              </Button>
            </div>
          </div>
          <div className="col-md-6">
            <Card title="Chat with Insurance Provider">
              <Button type="primary" onClick={handleChat}>
                Chat
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Insurance;

// import React, { useState } from "react";
// import { Form, Input, Select, Button } from "antd";
// import Layout from "./../components/Layout";

// const { Option } = Select;

// const Insurance = () => {
//   const [selectedPlan, setSelectedPlan] = useState("basic");

// const handlePlanSelection = (plan) => {
//   setSelectedPlan(plan);
// };

//   const onFinish = (values) => {
//     console.log("Received values of form: ", values);
//   };

//   return (
//     <Layout>
//       <div className="container">
//         <h2 style={{ textAlign: "center" }}>Your Insurance Package Plan</h2>
// <p>
//   You have selected <strong>{selectedPlan}</strong> package plan.
// </p>
// <h3>Select your plan:</h3>
// <div className="mb-3">
//   <Button
//     type={selectedPlan === "basic" ? "primary" : "default"}
//     onClick={() => handlePlanSelection("basic")}
//     disabled={selectedPlan === "basic"}
//   >
//     Basic
//   </Button>
//   <Button
//     type={selectedPlan === "standard" ? "primary" : "default"}
//     onClick={() => handlePlanSelection("standard")}
//     disabled={selectedPlan === "standard"}
//   >
//     Standard
//   </Button>
//   <Button
//     type={selectedPlan === "premium" ? "primary" : "default"}
//     onClick={() => handlePlanSelection("premium")}
//     disabled={selectedPlan === "premium"}
//   >
//     Premium
//   </Button>
// </div>
//         <h3>Get a custom quote:</h3>
//         <Form onFinish={onFinish}>
//           <Form.Item
//             name="gender"
//             rules={[{ required: true, message: "Please select your gender" }]}
//           >
//             <Select placeholder="Select Gender">
//               <Option value="male">Male</Option>
//               <Option value="female">Female</Option>
//               <Option value="other">Other</Option>
//             </Select>
//           </Form.Item>
//           <Form.Item
//             name="age"
//             rules={[{ required: true, message: "Please enter your age" }]}
//           >
//             <Input placeholder="Age" type="number" />
//           </Form.Item>
//           <Form.Item
//             name="coverageAmount"
//             rules={[
//               { required: true, message: "Please enter the coverage amount" },
//             ]}
//           >
//             <Input placeholder="Coverage Amount" type="number" />
//           </Form.Item>
//           <Form.Item
//             name="coverageType"
//             rules={[
//               { required: true, message: "Please select the coverage type" },
//             ]}
//           >
//             <Select placeholder="Select Coverage Type">
//               <Option value="life">Life Insurance</Option>
//               <Option value="health">Health Insurance</Option>
//               <Option value="auto">Auto Insurance</Option>
//               <Option value="home">Home Insurance</Option>
//             </Select>
//           </Form.Item>
//           <Form.Item name="customQuote">
//             <Input.TextArea placeholder="Custom Requirements" />
//           </Form.Item>
//           <Button type="primary" htmlType="submit">
//             Get Quote
//           </Button>
//         </Form>
//       </div>
//     </Layout>
//   );
// };

// export default Insurance;
