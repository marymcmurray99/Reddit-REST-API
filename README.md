# Reddit-REST-API
Rest API for getting the top posts from a specific subreddit. 

This program works by starting up a server and then listening for get requests on port 3000. 
Once a request is received, it calls the reddit API to get the top post for the supplied 
subreddit, shortens the response to only include relevant information, and then returns a JSON 
response containing the posts.

# Running Locally
To run locally, you must have Node.js, Express (with body parser and morgan), and npm installed. 

To start, run with 
> npm start

this will start the server. 

For getting the top posts from a given subreddit, perform a get request with the URL below 
replacing *subreddit* with your chosen subreddit
> localhost:3000/api/v1/posts/*subreddit*

For local testing, it is easiest to use Postman which can be downloaded to your computer here (https://www.postman.com/downloads/). 
Configuration for testing can be done by adding a new request to a new collection and setting it up 

- as a GET request
- with the URL as **localhost:3000/api/v1/posts/:subreddit**
- with one path variable where the key is **subreddit**

# Deployed application 

The application is deployed with Heroku and get requests can be accepted via the following URL
replacing *subreddit* with your chosen subreddit. 
> https://for-subreddit-top-posts.herokuapp.com/api/v1/posts/*subreddit*

For example, if you wanted to get the top posts from /r/neu (one of my favorites!), 
you would use this link https://for-subreddit-top-posts.herokuapp.com/api/v1/posts/neu

# Technologies Used
- In order to simplify the get request from Reddit, Axios was used.
- Express was used as the router for the Node.js program. 



