import express from "express";

const app = express();

app.get("/users", (req, res) => {
  res.json({ msg: "Hello Typescript" });
});

app.listen(3333);
