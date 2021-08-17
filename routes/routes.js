const express = require('express');
const router = express.Router();
const API = require("../controllers/api");
const multer = require('multer');

router.get("/", API.fetchAllProducts);
router.get("/:id", API.fetchProductByQRCode);

module.exports = router;