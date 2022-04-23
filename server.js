import express from "express";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import notFoundMiddleware from "./middleware/not-found.js";
const app = express();

// middleware

app.get("/",(req, res)=>{
    throw new Error('error')
    res.send("Welcome on server")
})

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`server is listening ${port}...`);
});
