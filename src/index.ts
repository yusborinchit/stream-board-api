import dotenv from "dotenv";
import express from "express";
import http from "http";
import { Server } from "socket.io";

dotenv.config({ path: `${__dirname}/../.env.local` });

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get("/", (_, res) => {
  res.send("Hello World!");
});

io.on("connection", (socket) => {
  console.log("A user connected");
  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
