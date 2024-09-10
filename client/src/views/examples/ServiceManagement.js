import React, { useState, useEffect } from 'react';
import axios from 'axios';
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

const Icons = () => {
  const [services, setServices] = useState([]);
  const [form, setForm] = useState({ name: '', price: '', category: '', subcategory: '' });
  const [editingService, setEditingService] = useState(null);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/services');
      setServices(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingService) {
        await axios.put(`http://localhost:5000/api/services/${editingService._id}`, form);
      } else {
        await axios.post('http://localhost:5000/api/services', form);
      }
      fetchServices();
      setForm({ name: '', price: '', category: '', subcategory: '' });
      setEditingService(null);
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (service) => {
    setForm(service);
    setEditingService(service);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/services/${id}`);
      fetchServices();
    } catch (err) {
      console.error(err);
    }
  };

  const [copiedText, setCopiedText] = useState();
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
      <Container>
        <br/>
        <br/>
        <br/>
        <br/> 
        <br/>
      <h2>Service Management</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="name">Service Name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Service Name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="price">Price</Label>
          <Input
            type="number"
            name="price"
            id="price"
            placeholder="Price"
            value={form.price}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="category">Category</Label>
          <Input
            type="text"
            name="category"
            id="category"
            placeholder="Category"
            value={form.category}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="subcategory">Subcategory</Label>
          <Input
            type="text"
            name="subcategory"
            id="subcategory"
            placeholder="Subcategory"
            value={form.subcategory}
            onChange={handleChange}
          />
        </FormGroup>
        <Button type="submit" color="primary">
          {editingService ? 'Update Service' : 'Add Service'}
        </Button>
      </Form>

      <ListGroup className="mt-4">
        {services.map((service) => (
          <ListGroupItem key={service._id}>
            {service.name} - ${service.price} - {service.category} / {service.subcategory}
            <Button color="warning" onClick={() => handleEdit(service)} className="ml-2">
              Edit
            </Button>
            <Button color="danger" onClick={() => handleDelete(service._id)} className="ml-2">
              Delete
            </Button>
          </ListGroupItem>
        ))}
      </ListGroup>
    </Container>
      </Container>
    </>
  );
};

export default Icons;
