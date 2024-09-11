
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Table,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
// core components
import Header from "components/Headers/Header.js";

const Tables = () => {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({ rating: '', comment: '' });
  const [editingReview, setEditingReview] = useState(null);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/reviews');
      setReviews(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("hie");
    
    try {
      if (editingReview) {
        await axios.put(`http://localhost:5000/api/reviews/${editingReview._id}`, form);
      } else {
        console.error("No review selected for editing");
      }
      fetchReviews();
      setForm({ rating: '', comment: '' });
      setEditingReview(null);
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (review) => {
    setForm({ rating: review.rating, comment: review.comment });
    setEditingReview(review);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/reviews/${id}`);
      fetchReviews();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Header />
      {/* Page content */}
      <br/>
      <br/>
      <Container>
      <h2>Review Management</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="rating">Rating</Label>
          <Input
            type="number"
            name="rating"
            id="rating"
            placeholder="Rating (1-5)"
            value={form.rating}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="comment">Comment</Label>
          <Input
            type="text"
            name="comment"
            id="comment"
            placeholder="Comment"
            value={form.comment}
            onChange={handleChange}
          />
        </FormGroup>
        <Button type="submit" color="primary">
          {editingReview ? 'Update Review' : 'Add Review'}
        </Button>
      </Form>

      <Table striped className="mt-4">
        <thead>
          <tr>
            <th>Provider</th>
            <th>Customer</th>
            <th>Rating</th>
            <th>Comment</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map(review => (
            <tr key={review._id}>
              <td>{review.providerId.name}</td>
              <td>{review.customerId.name}</td>
              <td>{review.rating}</td>
              <td>{review.comment}</td>
              <td>
                <Button color="warning" onClick={() => handleEdit(review)} className="mr-2">
                  Edit
                </Button>
                <Button color="danger" onClick={() => handleDelete(review._id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
    </>
  );
};

export default Tables;
