var express = require("express");
var router = express.Router();
var cors = require("cors");
router.use(cors());
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/getProducts", function (req, res, next) {
  (async () => {
    const response = await fetch("https://fakestoreapi.com/products/");
    const body = await response.text();
    res.send(JSON.parse(body));
  })();
});
module.exports = router;
