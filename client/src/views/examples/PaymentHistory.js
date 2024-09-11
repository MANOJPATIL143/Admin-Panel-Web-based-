import React, { useState, useEffect } from 'react';
import axios from 'axios';

// reactstrap components
import { Card, Container, Row, Table } from "reactstrap";

// core components
import Header from "components/Headers/Header.js";

const MapWrapper = () => {
  const [payments, setPayments] = useState([
    // Hardcoded data
    {
      _id: '1',
      customerId: { name: 'John Doe' },
      serviceId: { name: 'Web Development' },
      amount: 200,
      date: '2024-09-01T00:00:00Z',
    },
    {
      _id: '2',
      customerId: { name: 'Jane Smith' },
      serviceId: { name: 'Graphic Design' },
      amount: 150,
      date: '2024-09-02T00:00:00Z',
    },
    {
      _id: '3',
      customerId: { name: 'Alice Johnson' },
      serviceId: { name: 'SEO Optimization' },
      amount: 300,
      date: '2024-09-03T00:00:00Z',
    },
  ]);

  useEffect(() => {
    // Uncomment the line below to fetch payments from API when ready
    // fetchPayments();
  }, []);

  const fetchPayments = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/payments');
      setPayments(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div
        style={{ height: `600px` }}
        className="map-canvas"
        id="map-canvas"
      >
        <Container>
          <h2>Payment History</h2>
          <Table striped>
            <thead>
              <tr>
                <th>Customer</th>
                <th>Service</th>
                <th>Amount</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {payments.map(payment => (
                <tr key={payment._id}>
                  <td>{payment.customerId.name}</td>
                  <td>{payment.serviceId.name}</td>
                  <td>${payment.amount}</td>
                  <td>{new Date(payment.date).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </div>
    </>
  );
};

const Maps = () => {
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow border-0">
              <MapWrapper />
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Maps;
