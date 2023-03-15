import express from "express";
import cors from "cors";

const app = express();
app.use(express.json(), 
    cors());

app.get("/", 
(req, res) => {
    res
    .send("Ola mundo!");
});

app.listen(3000, 
    ()  => {
    console.log("app running!");
})