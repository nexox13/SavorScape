# Savorscape

Savorscape is an interactive map application where you can explore, search, add, edit, and delete recipes from around the world. Built using modern web technologies, Savorscape allows users to interact with a world map powered by Mapbox and manage recipes stored in MongoDB.

## Features
- Interactive world map to explore recipes by country.
- Add, edit, and delete recipes with detailed information.
- Search for recipes by country or specific criteria.
- Theme customization for the map and button colors.
- User authentication system for secure access.

## Technologies Used
- **Frontend**: React (with TypeScript)
- **Backend**: Express.js
- **Database**: MongoDB
- **Map Integration**: Mapbox API
- **Containerization**: Docker

---

## Project Structure

### Client
The client is built using React and TypeScript, providing a dynamic and user-friendly interface. The client runs on port **8080**.

### RecipeAPI
The API, developed using Express.js, handles the backend logic for managing users and recipes. The API runs on port **3001**.

#### API Routes

| Route       | Description                                                                                      |
|-------------|--------------------------------------------------------------------------------------------------|
| `/register` | Used to register a new user, update a password, or retrieve a user by ID. Allows user deletion.   |
| `/login`    | Handles user login, returning a token and the user object.                                       |
| `/recipe`   | Retrieves all recipes, adds new recipes, and handles recipe updates and deletions. Supports fetching recipes by ID or by country. |

### MongoDB
MongoDB stores the application data in two collections: **recipes** and **users**. The database runs on its default port **27017**.

#### Recipes Collection
Each recipe document has the following structure:
```json
{
    "country": { "type": "String", "required": true },
    "title": { "type": "String", "required": true },
    "difficulty": { "type": "Number", "required": true },
    "ingredients": [
        {
            "name": { "type": "String", "required": true },
            "amount": { "type": "Number", "required": true },
            "unit": { "type": "String", "required": true }
        }
    ],
    "instructions": { "type": "String", "required": true }
}
```

#### Users Collection
Each user document has the following structure:
```json
{
    "username": { "type": "String", "required": true, "unique": true },
    "password": { "type": "String", "required": true }
}
```
Timestamps are automatically added to each user document.

---

## Setup Instructions

### Prerequisites
- Docker
- Node.js (if running locally without Docker)

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd savorscape
   ```

2. Start the Docker containers:
   ```bash
   docker-compose up --build
   ```

3. Access the application:
   - Frontend: `http://localhost:8080`
   - API: `http://localhost:3001`

4. Set up the environment variables:
   - For Mapbox API key, database connection string, and JWT secrets.

### Development
- Run the frontend:
  ```bash
  cd client
  npm install
  npm start
  ```
- Run the backend:
  ```bash
  cd server
  npm install
  npm start
  ```

---


## Authors
- **Leonie Lange**
  [![Leonie Lange](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/leonie-lange-0ab8392a5/)

- **Stefan Haller**
  [![Stefan Haller](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/stefan-haller-678a842b9/)

