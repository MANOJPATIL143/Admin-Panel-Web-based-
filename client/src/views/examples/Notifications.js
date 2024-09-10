// components/Notifications.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, ListGroup, ListGroupItem, Button, Alert  } from 'reactstrap';
import Header from "components/Headers/Header.js";

const Notifications = ({ userId }) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetchNotifications();
  }, [userId]);

  const fetchNotifications = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/notifications/${userId}`);
      setNotifications(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleMarkAsRead = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/notifications/${id}`);
      fetchNotifications();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
    <Header />
    <br/>
    <br/>
    <Container>
      <h2>Notifications</h2>
      {notifications.length === 0 ? (
        <Alert color="info">No notifications available.</Alert>
      ) : (
        <ListGroup>
          {notifications.map((notif) => (
            <ListGroupItem key={notif._id} className={notif.read ? 'bg-light' : ''}>
              {notif.message}
              {!notif.read && (
                <Button color="info" onClick={() => handleMarkAsRead(notif._id)} className="float-right">
                  Mark as Read
                </Button>
              )}
            </ListGroupItem>
          ))}
        </ListGroup>
      )}
    </Container>
    </>
  );
};

export default Notifications;
