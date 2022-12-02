const express = require('express');

const handleAllRequests = (requestObject, responseObject) =>{
     console.log('Hi have you Receive any request ?');
    //  responseObject.write("<h1> this is your response</h1> \n");
    //  responseObject.write("Another part of the response");
    
    const url = requestObject.url;
   responseObject.setHeader("content-type","text/html");
   responseObject.write("<h2>Page not fund</h2>");
   responseObject.end();
}
    // if(url === '/'){
    //     responseObject.write("<h1> Welcome to the Home page</h1>");
    // }else if(url === '/login'){
    //      responseObject.write("<h2> Welcome to Login page</h2>");
    // }
    // else if(url === '/signup'){
    //     responseObject.write("<h2> Welcome to Signup page</h2>");
    // }
    // else if(url === '/profile'){
    //      responseObject.write("<h2> Welcome to the Profile page</h2>")
    // }
    // else{

//  const handdleHomeRequests = (req,res)=>{
//      res.send("<h1> Welcome to the Home page</h1>");
//  }
// const handdleLoginRequests = (req,res)=>{
//     res.send("<h2> Welcome to the Login page</h2>");
// }
// const handdleSignupRequests = (req,res)=>{
//     res.send("<h2> Welcome to the Sign up page</h2>");
// }
// const handdleProfileRequests = (req,res)=>{
//     res.send("<h2> Welcome to the Profile page</h2>");
// }
const server = express();
const handdleAllTypesOfRequests = (req,res)=>{
res.send("Response from server.use");
}
const handdleProfilePutRequestsType = (req,res)=>{
    res.send("Response from put Method");
    }
// server.use("/", handdleHomeRequests);
// server.use("/Login", handdleLoginRequests);
// server.use("/Signup", handdleSignupRequests);
// server.use("/profile", handdleProfileRequests);
// server.use("/", handdleHomeRequests);
// server.use(handleAllRequests);
server.post("/profile", handdleProfilePutRequestsType);
server.get("/login",(req,res) => res.send("Hello this is the login page get"));
server.put("/profile", handdleAllTypesOfRequests);
server.get("/signup",(req,res) => res.send("Hello this is the signup page get"));
server.post("/login",(req,res) => res.send("Hello this is the login page"));
server.delete("/login",(req,res) => res.send("Hello this is the login page from delete"));
server.listen(3000, () => console.log("server is ready to acccept request from post"));