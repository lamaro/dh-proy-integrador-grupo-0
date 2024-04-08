const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
    res.send("Estos son los discos");
  });
  

module.exports = router;