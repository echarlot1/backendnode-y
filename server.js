import express from "express"; // bringing express module

const app = express();

app.get("/", (req, res)=>{
    res.send("Welcome to my first server!!");
})

app.get("/api/users", (req, res)=>{
    res.send(`<h1>Those are all the users we got on our site!</h1>`)
})

const PORT = 3001;

app.listen(PORT, (req, res) =>{
    console.log(`My server is running on port ${PORT}`);
})