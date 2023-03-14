const express = require("express");
const connection = require("./Db/db");
const userRouter = require("./Routes/user");
const cors = require("cors");
const dataRouter = require("./Routes/data");

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json())

app.use("/api/user",userRouter);
app.use("/api/data",dataRouter);

app.get("/",(req,res)=>{
    res.send("Hello world")
})

app.listen(port,async()=>{
    try {
        await connection;
        console.log("database connect successfully");
    } catch (error) {
        console.log(error,"Something went wrong in database");
    }
    console.log(`Backend runs sucessfully on ${port}`);
})

 