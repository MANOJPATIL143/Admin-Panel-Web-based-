# Admin-Panel-Web-based-

Default Admin Credentials
Username: admin@example.com
Password: admin123

/project-directory
|-- /client           # React frontend
|-- /server           # Express backend
|-- README.md         # Project documentation


# MERN Stack Admin Panel

This project is a MERN stack admin panel for managing services, bookings, reviews, customer chat, and notifications. It provides functionalities for admin login, viewing statistics, managing customer and service provider details, and more.

## Features

- **Admin Login & Dashboard**: Admin can log in to view total customers and service providers, and manage their details.
- **Service Management**: Add, modify, and categorize services with pricing.
- **Booking & Review Management**: View payment history and manage service provider reviews.
- **Customer Chat & Notifications**: View customer chat history and send notifications to users and service providers.
Backend Implementation
Data Model:

Purpose: Store chat messages between a customer and a service provider.
Components: A Chat model was created to define the structure of chat data, including:
customerId and providerId to identify the participants.
messages array to store individual messages with sender information, message content, and timestamps.
API Endpoints:

GET Endpoint: Retrieves chat history between a specified customer and provider.
POST Endpoint: Adds new messages to an existing chat or creates a new chat if none exists.
Frontend Implementation
Chat History Component:
Purpose: Display the chat history and allow users to send new messages.
Features:
Fetches chat messages from the backend and displays them.
Provides a form to send new messages, which updates the chat history dynamically.
Notifications
Overview
The Notifications feature allows viewing and managing notifications for users and service providers. It includes functionalities for listing notifications and marking them as read.

Backend Implementation
Data Model:

Purpose: Store notifications for users.
Components: A Notification model was designed to include:
userId to identify the recipient.
message content of the notification.
read status to track whether the notification has been read.
API Endpoints:

GET Endpoint: Fetches notifications for a specified user.
PUT Endpoint: Updates the notification status to mark it as read.
Frontend Implementation
Notifications Component:
Purpose: Display a list of notifications and provide functionality to mark them as read.
Features:
Retrieves notifications from the backend.
Displays a message when no notifications are available.
Allows users to mark notifications as read, updating the notification list accordingly.
Conditional Display
Notifications Count Check:
Purpose: Hide the notifications list if there are no notifications.
Implementation: Conditional rendering is used to show an alert message when the notifications count is zero, ensuring that users are informed when there are no notifications available.
Integration Summary
Data Handling: Both chat and notifications rely on a backend data model to store and manage information, which is accessed via API endpoints.
User Interface: React components are used to interact with the backend, display data, and provide user interactions like sending messages or marking notifications as read.
Conditional Rendering: Ensures a clean and user-friendly interface by displaying appropriate messages or components based on the availability of data.
