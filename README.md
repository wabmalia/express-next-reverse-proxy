# express-next-reverse-proxy
Express application that provides basic authentication and reverse proxy to NextJS app

#How to use:
- Go to **/api** and run `npm install && npm run start`(starts api on port 3001)
- Go to **/app** and run `npm install && npm run dev`(starts app on port 3000)
- Open a Browser and request [http://localhost:3001/users](http://localhost:3001/users) and insert credentials(**admin**: _supersecret_)

#What's happening
- In order to gain access to the page, you need to provide credentials
- Your request is being redirected to the frontend service
- This reverse proxy will provide the Basic Auth token that can be used while server side rendering
- The frontend will request the users from the API with a valid authorization header
