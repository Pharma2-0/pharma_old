const Product = require('../models/product');

module.exports = class API{
    // fetch all products
    static async fetchAllProducts(req, res) {
        try{
            const product = await Product.find()
            res.status(200).json(product);
        } catch(err) {
            res.status(404).json({ message: err.message });
        }
    }

    // fetch product by QR Code
    static async fetchProductByQRCode(req, res) {
        console.log(req.params.id);
        try{
            const product = await Product.findOne({ qrcode: req.params.id })
            res.status(200).json(product);
        } catch(err) {
            res.status(404).json({ message: err.message });
        }
    }

}
