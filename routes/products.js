const express = require("express");
const router = express.Router();
const productController = require('../controllers/productController')

router.get("/", productController.index);
router.get("/brand/:brand", productController.brand);
router.get("/color/:color", productController.color)


module.exports = router;
