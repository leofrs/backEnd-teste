import express from "express";
import { postRouter } from "./routes/post.router";
import cors from "cors";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());
app.use(postRouter);

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
