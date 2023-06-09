# Authentication Client

A simple React-based authentication client that demonstrates user registration, login, and profile retrieval using a Django backend with Django REST Framework.

## Features

- User registration with a username, password, and bio.
- User login using username and password.
- Retrieving user profile (bio) after successful login.

## Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [Django](https://www.djangoproject.com/download/)
- [Django REST Framework](https://www.django-rest-framework.org/)

## Installation

### Backend Setup

1. Clone the repository containing the Django backend.
2. Navigate to the backend project directory.
3. Create and activate a virtual environment:

```
python -m venv venv
```

```
source venv/bin/activate # Linux/Mac
```


```
venv\Scripts\activate # Windows
```

4. Install the required dependencies:

```
pip install -r requirements.txt
```

5. Run the Django server:

```
python manage.py runserver
```

### Frontend Setup

1. Clone the repository containing the React frontend.
2. Navigate to the frontend project directory.
3. Install the required dependencies:

```
npm install
```

4. Start the React development server:

```
npm start
```

## Usage

Open the React frontend in your web browser at `http://localhost:3000/`. You can register a new user, log in with an existing user, and retrieve the user's profile information (bio) after successful login.
