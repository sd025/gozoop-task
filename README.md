## Project Overview

This project is a simple 2-page website built using the MERN stack (MongoDB, Express.js, React, Node.js). It includes a homepage with a banner, a form for user submissions, and an admin panel to view those submissions.

### Features:

1. **Homepage (`/`)**  
   - Displays a logo, menu bar, and a banner with CTA.  
   - Each banner has a "Call to Action" button that redirects the user to the form page when clicked.

2. **Form Page (`/form`)**  
   - A user-friendly form where users can submit their name and email.  
   - Once submitted, the form data is saved in the MongoDB database.

3. **Admin Panel (`/admin`)**  
   - Allows the admin to view all the submitted entries (name & email) from the database.  

### How to Run:

1. Clone the repository to your local machine.
2. Install the required dependencies:
   - Frontend: `npm install` (in the React folder)
   - Backend: `npm install` (in the Node.js folder)
3. Start the server:
   - Run the backend using `npm run dev` in the Node.js folder.
   - Run the frontend using `npm run dev` in the React folder.

Now you should be able to access the website at `http://localhost:3000`.
