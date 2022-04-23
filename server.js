import express from "express";
import notFoundMiddleware from "./middleware/not-found.js";
const app = express();

// middleware

app.get("/",(req, res)=>{
    res.send("Welcome on server")
})

app.use(notFoundMiddleware)

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`server is listening ${port}...`);
});
