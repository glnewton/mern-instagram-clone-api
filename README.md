# MERN Instagram Clone API

## Introduction

This is the back-end API for a MERN stack Instagram Clone. It uses Node with Express as the server, Mongoose as the ORM, and MongoDB as the database. The API is responsible for handling user-generated content, such as messages and comments. It is designed to be used in conjunction with a React front-end. It has two main models, Message and Comment, which are used to interact with the MongoDB.

[GitHub Repository](https://github.com/glnewton/mern-instagram-clone-api)

[Live API](https://mern-instagram-clone-api.onrender.com)

[GitHub Repository](https://github.com/glnewton/mern-instagram-clone-ui)

[Live Site](https://mern-instagram-clone-ui.onrender.com)

## Deployment & Build Status

This project is a hosted and deployed via Render. Render monitors this repository and will redploy on new commits.

## Code Style

Elements of both functional programming and object-oriented programming are used in this project.

## Technologies, Languages, Libraries & Platforms Used

- NodeJS
- ExpressJS
- MongoDB (Cloud NoSQL Database)
- Mongoose (ORM)
- Render (Cloud PaaS Platform)

## Features

1. The API has full CRUD functionality for the Message and Comment models.
2. It uses the Mongoose library to interact with MongoDB.
3. It includes routes for getting, creating, updating, and deleting messages and comments.
4. The API uses CORS to allow the front-end to access the API.


### Files & Directories 

- server.js - the main file for the express app, where the express app is created and the middleware and routes are set up.  
- package.json - lists the packages (including express) that the project depends on, as well as scripts for running the app and testing.  
- package-lock.json - records the exact versions of package dependencies that were installed.  
- README.md - a file containing information about the project, including instructions for how to set it up and use it. This file is often displayed on the project's homepage on GitHub.  
- controllers/ - contains the route handlers for the app, which define the behavior for each URL endpoint.  
- models/ - This directory contain files for setting up the database schema and defining models for interacting with the data in MongoDB via Mongoose.  
- docs/ - contains documentation files for the project, iscreenshots, requirements and other files used by the developer such as an API reference or user guide.  
- utilities/ - contains utility files for the project, files to seed the database, or other files used by the developer.  

## Endpoints 

### Messages  
    - GET /messages: Get all messages  
    - POST /messages: Create a new message  
    - GET /messages/:id: Get a specific message by id  
    - PUT /messages/:id: Update a specific message by id  
    - DELETE /messages/:id: Delete a specific message by id  

### Comments  
    - GET /comments: Get all comments  
    - POST /comments: Create a new comment  
    - GET /comments/:id: Get a specific comment by id  
    - PUT /comments/:id: Update a specific comment by id  
    - DELETE /comments/:id: Delete a specific comment by id  

## Data Models

### Message  
     userName: String  
     userProfileImage: String  
     imageUrl: String  
     message: String  
     likes: Number  
     createdDate: String  
     comments: Number  

##### Sample Message Document

```
{
    "userName": "glnewton",
    "userProfileImage": "https://avatars.githubusercontent.com/u/69450874?v=4",
     "imageUrl": "https://images.unsplash.com/photo-1617670000000-1b1b1b1b1b1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
     "message": "This is a test message",
     "likes": 0,
     "createdDate": "2021-04-01T00:00:00.000Z",
     "comments": 0
 }
```

### Comment  
     messageId: String  
     userName: String  
     userProfileImage: String  
     text: String  
     createdDate: String  

#### Sample Comment Document  

```
 {
     "messageId": "60e3b6b9b9b9b9b9b9b9b9b9",
     "userName": "glnewton",
     "userProfileImage": "https://avatars.githubusercontent.com/u/69450874?v=4",
     "text": "This is a test comment",
     "createdDate": "2021-04-01T00:00:00.000Z"
 }
```

## Installation Instructions

**Step 1: Clone the repository**  

Run the following code in your terminal to download the code:  

`git clone https://github.com/glnewton/mern-instagram-clone-api.git`

**Step 2: Install Dependencies**

`cd mern-instagram-clone-api`

`npm install`

**Step 3: Configure the application**

Create a .env file in the root directory and add a MONGODB_URI variable with the link to your MongoDB database. Add the PORT as well.


**Step 4: Start the application**

Run the following code in your terminal to start the application:

`npm start`

The app will now be running at <http://localhost:3001> by default.

**Step 5: Seed the Database**

You can seed the database with some initial data by sending a GET request to http://localhost:3001/seed

## API Functionality

1. API can perform basic CRUD operations for MESSAGES and COMMENTS.
2. All changes persist whether local or on the deployed site.
3. API is deployed on Render.
4. API will only accept whitelisted domains.

## Known Issues

- Unused and untested endpoints for the comment routes getAllCommentsByMessage and getLLCommentsByUser

## Roadmap

- Address the above issues

## Acknowledgements  

- This project was inspired by the Instagram app.
- To Cycle 28
- To the apprentices
- To G,T,K,M et al

## Resources

- Tishana TDL Express/React

## Disclaimer

I am not affliated with any of the above and all work used is for educational and demonstration purposes only. No profit is generated from this project.

## Author

- Gary Newton - [GitHub Profile](https://github.com/glnewton)  |  [LinkedIn Profile](https://www.linkedin.com/in/gary-newton-developer/)

## License

MIT License

MIT © [Gary Newton]()
