# Admin-Panel-Web-based-

Default Admin Credentials

Username: admin@example.com

Password: admin123



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

Replace <project-directory> with the name of the cloned project folder.

3. Set Up the Backend
- Navigate to the server directory:
  ```
  cd server
  ```
- Install backend dependencies:
  ```
  npm install
  ```
- Create a .env file in the server directory and add your MongoDB connection string and any other environment variables (e.g., PORT, JWT_SECRET):
  ```
  MONGO_URI=<your-mongodb-connection-string>
  JWT_SECRET=<your-jwt-secret>
  PORT=5000
  ```
- Start the backend server:
  ```
  npm start
  ```

4. Set Up the Frontend
- Open a new terminal window and navigate to the client directory:
  ```
  cd client
  ```
- Install frontend dependencies:
  ```
  npm install
  ```
- Start the frontend development server:
  ```
  npm start
  ```
- Open your browser and navigate to http://localhost:3000.

Default Admin Credentials:

- Username: admin@example.com
- Password: admin123

Note: Update these credentials in the database or during the first login.

Project Structure:

/project-directory
|-- /client           # React frontend
|-- /server           # Express backend
|-- README.md         # Project documentation

Contributing:

Feel free to fork this repository, make changes, and submit a pull request. All contributions are welcome!

License:

This project is open-source and available under the MIT License.
