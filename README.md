# Blogging Platform

A basic blogging platform where users can register, create, edit, delete, and view blog posts. The platform has user authentication, CRUD operations for blog posts, and a simple responsive design.

## Features

1. **User Authentication:**
   - Users can register and log in.
   - JWT (JSON Web Token) is used for maintaining user sessions.

2. **Blog Posts:**
   - Authenticated users can create, edit, and delete their own blog posts.
   - Any user (authenticated or not) can view all blog posts.
   - Blog posts have a title, body, author, and timestamp.

3. **API Endpoints:**
   - RESTful API endpoints for user registration, login, and CRUD operations on blog posts.
   - API endpoints are secured to ensure only authenticated users can create, edit, or delete posts.

4. **Front-End:**
   - Simple and responsive front-end using React.
   - Forms for user registration and login.
   - Forms for creating and editing blog posts.
   - List of all blog posts on the homepage, with links to view individual posts.

5. **Database:**
   - MongoDB is used to store user information and blog posts.
   - Appropriate schemas for users and posts are designed.

6. **Deployment:**
   - The application is deployed to Heroku (Back-End) and Vercel (Front-End).
   - The application is accessible via a public URL.

## Technical Stack

- **Front-End:** React
- **Back-End:** Node.js with Express.js
- **Database:** MongoDB
- **Authentication:** JWT
- **Deployment:** Heroku (Back-End) and Vercel (Front-End)

Usage
Register a new user:

Go to the registration page and create a new account.
Login:

Log in with your registered credentials.
Create a new blog post:

Go to the create post page and submit a new blog post.
Edit or delete a blog post:

Navigate to your post and use the edit or delete options.
View all blog posts:

Go to the homepage to see a list of all blog posts.
