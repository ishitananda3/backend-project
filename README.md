# Backend Project

## Tech Stack
- Node.js
- Express.js
- PostgreSQL
- Prisma ORM

## Setup Instructions

1. Clone repo
git clone <repo-url>

2. Install dependencies
npm install

3. Setup environment variables
Create .env file:

DATABASE_URL=your_database_url

4. Run migrations
npx prisma migrate dev

5. Start server
npm run dev

## API Endpoints

POST /users
GET /users
GET /users/:id
PUT /users/:id
DELETE /users/:id