const router = require("express").Router();
const fetch = require("node-fetch");

router.get("/", async (req, res, next) => {
  res.send({ message: "Ok api is working 🚀" });
});

router.get("/data", async (req, res, next) => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const data = await fetch(url);
  const response = await data.json();
  res.json(response);
  console.log(response)
});

module.exports = router;
