import express from "express";
const app = express();

app.get("/", (req, resp) => {
  try {
    resp.json({ msg: "Hello World" });
  } catch (err) {}
});

app.listen(4000, () => {
  console.log("Server Start Post on 4000");
});
