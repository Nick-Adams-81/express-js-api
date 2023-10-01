const router = require("express").Router();
const fetch = require("node-fetch");

router.get("/", async (req, res, next) => {
  res.send({ message: "Ok api is working 🚀" });
});

router.get("/data", async (req, res, next) => {
  try {
    const url = "https://jsonplaceholder.typicode.com/users";
    const data = await fetch(url);
    const response = await data.json();
    res.json(response);
  } catch (error) {
    next(error);
  }
});

router.get("/posts-by-id/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const response = await data.json();
    res.json(response);
  } catch (error) {
    next(error);
  }
});

router.get("/data-by-id/:id", async (req, res, next) => {
    const { id } = req.params;
    const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const response = await data.json()
    res.json(response)
})
module.exports = router;
