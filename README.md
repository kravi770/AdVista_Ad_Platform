# AdVista : A Full-Stack Ad Platform Project

AdVista is a comprehensive advertisement management platform designed to connect businesses with their audience effectively. Businesses can post ads, edit ads, and delete ads, viewers can explore a variety of ads tailored to their interests, and both can manage their preferences seamlessly.

## Features

- **User Authentication:** Secure login and registration system for business users and viewers.
- **Ad Posting:** Businesses can post, edit, and delete their advertisements.
- **Ad Browsing:** Viewers can explore and view ads in a user-friendly interface.
- **Interactive UI:** Edit and delete functionalities are easily accessible through interactive icons on each ad card.

## Authors

- [@kravi770](https://github.com/kravi770)

## Tech Stack

- **Frontend:** React, Chakra UI
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT for secure access

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file:

`POST` -- [Optional] Port on which to run the backend server (default is 8000)

`DB_USERNAME` -- Username

`DB_PASSWORD` -- Password

`ACCESS_TOKEN_SECRET` -- Secret key for JWT algorithm (You can add any random string)

## Run Locally

#### Before you start:

- Ensure Node.js, MongoDB, and npm/yarn are installed.

#### Steps:

Clone the project:

```bash
clone  https://github.com/kravi770/AdVista_Ad_Platform.git
```

Go to the project directory:

```bash
cd AdVista_Ad_Platform
```

### Backend Setup

Navigate to the backend directory:

```bash
cd backend
npm install
npm run start
```

### Frontend Setup

In a new terminal, navigate to the frontend directory:

```bash
cd ../frontend
npm install
npm run start
```

Your app should now be running!

## Backend API Endpoints

Below are the HTTP routes available in the AdHub platform backend. All endpoints are prefixed with `/api`.

### Authentication

- **Signup:** `POST /api/user/signup`
  - Registers a new user account.
  - Requires a body with `username`, `password`.
- **Login:** `POST /api/user/login`
  - Authenticates a user and returns a JWT token.
  - Requires a body with `username`, `password`.

### Business Routes

- **Submit Ad:** `POST /api/business/submit-ad`

  - Submits a new advertisement. _(Business users only)_
  - Requires JWT token in Authorization header.

- **Get Ads by Business ID:** `GET /api/business/ads`

  - Retrieves all ads submitted by the logged-in business user.
  - Requires JWT token in Authorization header.

- **Get Ad by ID:** `GET /api/business/ad/:id`

  - Retrieves a specific ad by its ID. _(Business users only)_
  - Requires JWT token in Authorization header.

- **Update Ad:** `PUT /api/business/ad/:id`

  - Updates a specific ad by its ID. _(Business users only)_
  - Requires JWT token in Authorization header.

- **Delete Ad:** `DELETE /api/business/ad/:id`
  - Deletes a specific ad by its ID. _(Business users only)_
  - Requires JWT token in Authorization header.

### User Route

- **Get User:** `GET /user`
  - Retrieves the profile of the logged-in user.
  - Requires JWT token in Authorization header.

### Viewer Routes

- **Get Targeted Ads:** `GET /api/viewer/targeted-ads`
  - Retrieves ads targeted for the viewer.
  - Requires JWT token in Authorization header.
