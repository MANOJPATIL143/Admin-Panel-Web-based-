import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  ListGroup,
  ListGroupItem,
} from 'reactstrap';
import UserHeader from "components/Headers/UserHeader.js";
import Header from "components/Headers/Header.js";

const ChatHistory = ({ customerId, providerId }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    fetchChatHistory();
  }, [customerId, providerId]);

  const fetchChatHistory = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/chats/${customerId}/${providerId}`);
      setMessages(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSend = async () => {
    try {
      await axios.post(`http://localhost:5000/api/chats/${customerId}/${providerId}`, {
        senderId: customerId, // or providerId depending on who is sending
        message: newMessage,
      });
      setNewMessage('');
      fetchChatHistory();
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
      <h2>Chat History</h2>
      <ListGroup>
        {messages.map((msg, index) => (
          <ListGroupItem key={index}>
            <strong>{msg.senderId === customerId ? 'You' : 'Provider'}:</strong> {msg.message}
          </ListGroupItem>
        ))}
      </ListGroup>
      <Form className="mt-3">
        <FormGroup>
          <Label for="message">New Message</Label>
          <Input
            type="text"
            name="message"
            id="message"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
        </FormGroup>
        <Button color="primary" onClick={handleSend}>
          Send
        </Button>
      </Form>
    </Container>
    </>
  );
};

export default ChatHistory;
