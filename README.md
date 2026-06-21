# Backend ☕

A backend API built with Node.js, Express.js, MongoDB, JWT Authentication, Multer, and Cloudinary. This project provides user authentication, profile management, avatar uploads, subscriptions, and watch history features.

## 🚀 Features

- User Registration & Login
- JWT Authentication
- Refresh Access Tokens
- Change Password
- Get Current User
- Update Account Details
- Upload Avatar
- Upload Cover Image
- User Channel Profile
- Watch History
- MongoDB Database Integration
- Cloudinary Image Storage
- Middleware-based Authentication
- Error Handling & API Responses

## 🛠️ Tech Stack

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Authentication
- JWT (JSON Web Token)
- Refresh Tokens

### File Uploads
- Multer
- Cloudinary

### Utilities
- dotenv
- bcrypt
- cookie-parser
- cors

---

## 📂 Project Structure

```bash
src/
│
├── controllers/
│   └── user.controller.js
│
├── db/
│
├── middlewares/
│   ├── auth.middleware.js
│   └── multer.middleware.js
│
├── models/
│   ├── user.model.js
│   ├── video.model.js
│   └── subscription.model.js
│
├── routes/
│   └── user.routes.js
│
├── utils/
│   ├── ApiError.js
│   ├── ApiResponse.js
│   ├── asyncHandler.js
│   └── cloudinary.js
│
├── app.js
├── constants.js
└── index.js
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/your-username/ChaiBackend.git
cd ChaiBackend
```

### Install Dependencies

```bash
npm install
```

### Create Environment Variables

Create a `.env` file in the root directory.

```env
PORT=8000

MONGODB_URI=your_mongodb_connection_string

ACCESS_TOKEN_SECRET=your_access_secret
ACCESS_TOKEN_EXPIRY=1d

REFRESH_TOKEN_SECRET=your_refresh_secret
REFRESH_TOKEN_EXPIRY=10d

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

CORS_ORIGIN=*
```

---

## ▶️ Run Project

### Development Mode

```bash
npm run dev
```

### Production Mode

```bash
npm start
```

Server runs on:

```bash
http://localhost:8000
```

---

## 🔐 Authentication Routes

### Register User

```http
POST /api/v1/users/register
```

### Login User

```http
POST /api/v1/users/login
```

### Logout User

```http
POST /api/v1/users/logout
```

### Refresh Token

```http
POST /api/v1/users/refresh-token
```

### Change Password

```http
POST /api/v1/users/change-password
```

---

## 👤 User Routes

### Get Current User

```http
GET /api/v1/users/current-user
```

### Update Account

```http
PATCH /api/v1/users/update-account
```

### Update Avatar

```http
PATCH /api/v1/users/avatar
```

### Update Cover Image

```http
PATCH /api/v1/users/cover-image
```

### Get Channel Profile

```http
GET /api/v1/users/c/:username
```

### Get Watch History

```http
GET /api/v1/users/history
```

---

## 📤 File Uploads

The application uses:

- Multer for handling multipart/form-data
- Cloudinary for image storage

Supported uploads:

- User Avatar
- Cover Image

---

## 🧩 API Response Format

### Success Response

```json
{
  "statusCode": 200,
  "data": {},
  "message": "Success"
}
```

### Error Response

```json
{
  "statusCode": 400,
  "message": "Something went wrong"
}
```

---

## 🔒 Security

- Password Hashing using bcrypt
- JWT Authentication
- Refresh Token Rotation
- Protected Routes Middleware

---

## 👨‍💻 Author

Abhiman Singh Baghel

GitHub: https://github.com/your-username

---

## 📜 License

This project is licensed under the MIT License.
