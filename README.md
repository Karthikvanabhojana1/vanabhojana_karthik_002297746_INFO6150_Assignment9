# vanabhojana_karthik_002297746_INFO6150_Assignment9
# React Project

This is a simple React project with user authentication and multiple pages.

## Project Structure

The project has the following structure:

- **src**
  - **Components**
    - **Home**
      - `Home.js`
        - [Login](#Login)
    - **About**
      - `AboutUs.js`
    - **Jobs**
      - `Jobs.js`
    - **Contact**
      - `Contact.js`
    - **Login**
      - `Login.js`
    - **Card**
      - `Card.js`
  - **APIs**
    - **Routes**
      - `Routes.js`
  - **Controllers**
    - `Controller.js`
  - **Models**
    - `model.js`
  - **Services**
    - `Services.js`
  - `App.jsx`
  - `Login.css`
  - `App.css`
  - `index.js`
  
## Dependencies

- `react`
- `react-dom`
- `react-router-dom`
- `express`
- `mongoose`
- `body-parser`
- `cors`
- `bcrypt`

## How to Run

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Run the React app: `npm start`
4. Run the Express server: `npm run server`

## Features

1. **React Components:**
   - Home, AboutUs, Jobs, Contact, Login, Card

2. **React Router:**
   - Navigation between different pages using `react-router-dom`.

3. **State Management:**
   - Using `useState` hook for managing state within functional components.

4. **User Authentication:**
   - Logging in users with email and password.
   - Handling login with asynchronous fetch requests to a server.

5. **Dynamic Content Rendering:**
   - Displaying dynamic content, such as a list of items.

6. **Styling:**
   - Styling components using inline styles and external CSS.

7. **Backend Server:**
   - Setting up an Express server with routes for user operations (create, update, delete, login).
   - Using MongoDB with Mongoose for user data storage.

8. **Security:**
   - Hashing user passwords using bcrypt for secure storage.

9. **Responsive Design:**
   - Basic responsive design using flexbox.

## Login
The `Login` component is a React component providing a simple login form for user authentication. It includes fields for entering email and password, and it communicates with a server endpoint for authentication.

