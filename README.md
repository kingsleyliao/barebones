# Barebones
Barebones is an app to bootstrap new projects written in React/Redux, Express, and MongoDB. It features
a local and a google authentication strategy set up using Passport. Additionally, it features a modular modal React component that is used for login and sign up.

## Instructions on how to run dev environment
- Clone Repo
- Inside the root directory, run "npm install"
- Inside the client director, run "npm install"
- Change back to the root directory and run "npm run dev"
- A new browser tab should automatically open, but if not, navigate to localhost:3000
- **Don't forget to create a dev.js file to hold secret keys for your MongoDB vendor and
GooglePlus API**

## High Level Architecture
This app is built on Express/Node, React/Redux, Mongoose/MongoDb, and MaterializeCSS.

- React: [React](https://github.com/facebook/react)
- Redux: [Redux](https://github.com/reactjs/redux)
- Express: [Express](https://github.com/expressjs/express)
- Sessions: [cookie-session](https://github.com/expressjs/cookie-session)
- OAuth20: [Google](https://github.com/google/google-api-nodejs-client)
- MongoDB: [mongoose](http://mongoosejs.com/)
- CSS: [MaterializeCSS](http://materializecss.com/)
- Testing: [mocha](https://github.com/mochajs/mocha) and [chai](https://github.com/chaijs/chai)
