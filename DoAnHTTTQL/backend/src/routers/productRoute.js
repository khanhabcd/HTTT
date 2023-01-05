const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productController");

// danh sách product
router.get("/product", productsController.getProducts);

// get 1 product theo id
router.get("/get-product/:id", productsController.getProduct);

// tạo product
router.post("/product/create", productsController.createProduct);

// cập nhật product
router.post("/product/update/:id", productsController.updateProduct);

// xoá product
router.delete("/product/delete/:id", productsController.deleteProduct);

module.exports = router;
