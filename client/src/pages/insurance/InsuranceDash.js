import React, { useState } from "react";
import Layout from "../../components/Layout";
const InsuranceDash = () => {
  const [patients, setPatients] = useState([
    {
      _id: "1",
      firstName: "John",
      lastName: "Doe",
      age: 35,
      gender: "Male",
      email: "john.doe@example.com",
      phone: "555-555-5555",
    },
    {
      _id: "2",
      firstName: "Jane",
      lastName: "Doe",
      age: 30,
      gender: "Female",
      email: "jane.doe@example.com",
      phone: "555-555-5555",
    },
    {
      _id: "3",
      firstName: "Bob",
      lastName: "Smith",
      age: 45,
      gender: "Male",
      email: "bob.smith@example.com",
      phone: "555-555-5555",
    },
  ]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [quotation, setQuotation] = useState(null);

  const handlePatientSelect = (patient) => {
    setSelectedPatient(patient);
    setQuotation(null);
  };

  const handleQuotationSubmit = () => {
    console.log(
      `Quotation submitted for patient ${selectedPatient._id}: ${quotation}`
    );
  };

  return (
    <Layout>
      <div className="container mt-4">
        <h1 className="text-center mb-4">Insurance Provider Dashboard</h1>

        <div className="row">
          <div className="col-md-4 mb-4">
            <h2 className="mb-4">Select a patient:</h2>
            <div style={{ maxHeight: "60vh", overflowY: "scroll" }}>
              <ul className="list-group">
                {patients.map((patient) => (
                  <li
                    key={patient._id}
                    className={`list-group-item ${
                      selectedPatient && selectedPatient._id === patient._id
                        ? "active"
                        : ""
                    }`}
                    style={{
                      fontSize: "1.1rem",
                      cursor: "pointer",
                    }}
                  >
                    <button
                      className="btn btn-link text-dark"
                      style={{
                        textDecoration: "none",
                      }}
                      onClick={() => handlePatientSelect(patient)}
                      onMouseEnter={(e) => (e.target.style.color = "white")}
                      onMouseLeave={(e) => (e.target.style.color = "black")}
                    >
                      {patient.firstName} {patient.lastName}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-md-8">
            {selectedPatient ? (
              <div className="card">
                <div className="card-body">
                  <h2 className="mb-4">Patient Details:</h2>
                  <div className="row mb-3">
                    <div className="col-md-3">
                      <p>
                        <strong>Name:</strong>
                      </p>
                      <p>
                        <strong>Age:</strong>
                      </p>
                      <p>
                        <strong>Gender:</strong>
                      </p>
                      <p>
                        <strong>Email:</strong>
                      </p>
                      <p>
                        <strong>Phone:</strong>
                      </p>
                    </div>
                    <div className="col-md-9">
                      <p>
                        {selectedPatient.firstName} {selectedPatient.lastName}
                      </p>
                      <p>{selectedPatient.age}</p>
                      <p>{selectedPatient.gender}</p>
                      <p>{selectedPatient.email}</p>
                      <p>{selectedPatient.phone}</p>
                    </div>
                  </div>

                  <h2 className="mb-4">Provide Quotation:</h2>
                  <div className="row mb-3">
                    <div className="col-md-3">
                      <label htmlFor="quotation">Quotation:</label>
                    </div>
                    <div className="col-md-9">
                      <input
                        type="text"
                        id="quotation"
                        className="form-control"
                        value={quotation}
                        onChange={(e) => setQuotation(e.target.value)}
                      />
                    </div>
                  </div>
                  <button
                    className="btn btn-primary"
                    onClick={handleQuotationSubmit}
                  >
                    Submit Quotation
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center">
                <h2>No patient selected</h2>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default InsuranceDash;
