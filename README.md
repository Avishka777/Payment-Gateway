# Payment Gateway Integration
This project demonstrates the integration of a payment gateway using Stripe. It includes a frontend built with React and Material-UI, and a backend built with Node.js and Express.

# Features
- Stripe payment integration
- Responsive UI with Material-UI
- SweetAlert for user notifications
- Express server setup with CORS and body-parser

# Getting Started with Project
To get started with the project, follow these steps:

1. Clone the Repository: Clone the project repository to your local machine using the following command:
    - git clone <repository_url> 
2. Install Dependencies: Open a terminal within the project directory and run the following command to install all dependencies:
    - npm install 
3. Run Backend Server: Start the backend server by running the following command in the terminal:
    - npm run dev
4. Run Frontend Server: Open a new terminal and navigate to the frontend directory within the project directory using the following command:
    - cd frontend
5. Install Dependencies: Open a terminal within the project directory and run the following command to install all dependencies:
    - npm install
6. Then, run the following command to start the frontend server:
    - npm run dev
7. Access the Application: Open a web browser and go:
    -  http://localhost:5173/
8. With these steps, you should now be able to run the project locally and access it through your web browser.

# Payment Flow

1. *User initiates payment:*
    - The user clicks the "Pay Now" button on the frontend.
    - The Stripe Checkout component collects payment details.

2. *Token generation:*
    - Stripe generates a token representing the payment details.

3. *Payment processing:*
    - The token is sent to the backend.
    - The backend uses the Stripe API to create a charge.

4. *Response handling:*
    - The backend sends a response indicating success or failure.
    - The frontend displays a corresponding alert to the user.
