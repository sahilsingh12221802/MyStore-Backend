# MyStore Backend

This is the backend repository for **MyStore**, a full-stack e-commerce application built as part of our Winter PEP classes. The backend is developed using **Node.js**, **Express**, and **MongoDB**, and it provides RESTful APIs for the frontend.

## Features
- User authentication (Signup, Login)
- Product management (List products, Get product by ID)
- Cart management (Add product, Update quantity, Remove product, Checkout)

## Technologies Used
- **Node.js**: Runtime environment
- **Express**: Web framework
- **MongoDB**: Database
- **Mongoose**: MongoDB object modeling
- **JWT**: Authentication
- **Render**: Deployment

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/sahilsingh12221802/myStore-Backend.git
   ```

2. Navigate to the project directory:
   ```bash
   cd myStore-Backend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a .env file and add the following environment variables:
    ```env
    PORT=10000
    MONGODB_URL=<your-mongodb-atlas-connection-string>
    JWT_SECRET=<your-jwt-secret>
    JWT_ACCESS_EXPIRATION_MINUTES=240
    ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. The backend will be running at http://localhost:10000.

## Deployment
The backend is deployed on Render. You can access the API here:<br>
[👉 MyStore Backend](https://mystore-backend-fn9r.onrender.com)


## Winter PEP Assignment
This project was developed as part of our Winter PEP classes to demonstrate proficiency in full-stack development using modern technologies like Node.js, Express, and MongoDB.



