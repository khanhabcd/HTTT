const PRODUCT = require("../models/product");

const productsController = {
  // danh sách đồ uống
  getProducts: async (req, res) => {
    try {
      const data = await PRODUCT.find().sort({ created_at: -1 });

      if (!data) {
        return res.json({
          success: false,
          message: "Không có data của đồ uống",
        });
      } else {
        return res.json({
          success: true,
          data: data,
        });
      }
    } catch (error) {
      return res.json({
        success: false,
        message: error,
      });
    }
  },

  // get 1 đồ uống theo id
  getProduct: async (req, res) => {
    try {
      const idProduct = req.params.id;

      const data = await PRODUCT.findById(idProduct);

      return res.json({
        success: true,
        data: data,
      });
    } catch (error) {
      return res.json({
        success: false,
        message: error,
      });
    }
  },

  // thêm mới đồ uống
  createProduct: async (req, res) => {
    try {
      const { name, status, created_at, money, count } = req.body;

      const newProduct = await PRODUCT.create({
        name,

        status,
        created_at,
        money,
        count,
      });

      return res.json({
        success: true,
        message: "Thêm đồ uống thành công !",
        data: newProduct,
      });
    } catch (error) {
      return res.json({
        success: false,
        message: "Thêm đồ uống thất bại !",
      });
    }
  },

  // update đồ uống
  updateProduct: async (req, res) => {
    try {
      const { name, created_at, status, money, count } = req.body;

      const idProduct = req.params.id;

      const data = await PRODUCT.findByIdAndUpdate(idProduct, {
        $set: {
          name,
          status,
          created_at,
          money,
          count,
        },
      });

      return res.json({
        success: true,
        message: "Cập nhật đồ uống thành công !",
        data: data,
      });
    } catch (error) {
      return res.json({
        success: false,
        message: "Cập nhật thất bại !",
      });
    }
  },

  // xoá đồ uống
  deleteProduct: async (req, res) => {
    try {
      const idProduct = req.params.id;

      await PRODUCT.findByIdAndDelete(idProduct);

      return res.json({
        success: true,
        message: "Xoá đồ uống thành công !",
      });
    } catch (error) {
      return res.json({
        success: false,
        message: "Xoá đồ uống thất bại !",
      });
    }
  },
};

module.exports = productsController;
