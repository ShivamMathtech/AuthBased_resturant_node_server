# Restaurant Management System API

This is a **Node.js & Express**-based RESTful API designed for managing a restaurant system. The API includes authentication, user management, menu management, order processing, and admin functionalities.

## Features

- **User Authentication**: Secure login and signup with JWT authentication.
- **Menu Management**: CRUD operations for menu items (Admin access required).
- **Order Management**: Users can place, update, and cancel orders.
- **Admin Dashboard**: Admins can manage users, orders, and menu items.
- **Database**: MongoDB with Mongoose for schema validation.

## Technologies Used

- **Node.js** & **Express.js** - Backend framework
- **MongoDB** & **Mongoose** - Database
- **JWT (JSON Web Token)** - Authentication
- **dotenv** - Environment variable management
- **cors** - Cross-Origin Resource Sharing
- **bcryptjs** - Password hashing

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/restaurant-management-api.git
cd restaurant-management-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create a `.env` File

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

### 4. Run the Server

```bash
npm start
```

The server will run at `http://localhost:5000`

## API Endpoints

### **1. Authentication & User Management**

#### Register a New User

```http
POST /api/auth/register
```

_Body:_

```json
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "password123"
}
```

#### User Login

```http
POST /api/auth/login
```

_Body:_

```json
{
  "email": "johndoe@example.com",
  "password": "password123"
}
```

_Response:_

```json
{
  "token": "your_jwt_token"
}
```

#### Get Current User (Protected)

```http
GET /api/auth/me
Authorization: Bearer <your_jwt_token>
```

### **2. Menu Management**

#### Get All Menu Items

```http
GET /api/menu
```

#### Add a New Menu Item (Admin Only)

```http
POST /api/menu
Authorization: Bearer <admin_jwt_token>
```

_Body:_

```json
{
  "name": "Pasta",
  "price": 12.99,
  "category": "Main Course",
  "description": "Creamy Alfredo Pasta",
  "imageUrl": "pasta.jpg"
}
```

### **3. Order Management**

#### Place an Order

```http
POST /api/orders
Authorization: Bearer <user_jwt_token>
```

_Body:_

```json
{
  "items": [
    {
      "menuId": "60c72b2f5f1b2c001c8e4a1a",
      "quantity": 2
    }
  ],
  "totalPrice": 25.98
}
```

#### Get User Orders

```http
GET /api/orders
Authorization: Bearer <user_jwt_token>
```

#### Update an Order (Admin Only)

```http
PUT /api/orders/:id
Authorization: Bearer <admin_jwt_token>
```

_Body:_

```json
{
  "status": "Completed"
}
```

### **4. Admin Dashboard**

#### Get All Users (Admin Only)

```http
GET /api/admin/users
Authorization: Bearer <admin_jwt_token>
```

#### Get All Orders (Admin Only)

```http
GET /api/admin/orders
Authorization: Bearer <admin_jwt_token>
```

## Project Structure

```
restaurant-management-api/
│── controllers/
│   ├── authController.js
│   ├── menuController.js
│   ├── orderController.js
│── middleware/
│   ├── authMiddleware.js
│   ├── adminMiddleware.js
│── models/
│   ├── User.js
│   ├── Menu.js
│   ├── Order.js
│── routes/
│   ├── authRoutes.js
│   ├── menuRoutes.js
│   ├── orderRoutes.js
│── server.js
│── .env
│── package.json
│── README.md
```

## License

This project is open-source and available under the **MIT License**.

---

### 🚀 **Happy Coding!**
