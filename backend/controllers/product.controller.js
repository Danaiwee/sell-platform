import mongoose from 'mongoose';
import Product from '../models/product.model.js'

export const getProducts = async(req, res) => {
    try {
      const products = await Product.find({});
      res.status(200).json({success: true, products: products})

    } catch (error) {
      console.log('Error in fetching products: ', error.message);
      res.status(500).json({success: false, message: 'Server Error'})  
    }
};

export const createProduct = async(req, res) => {
    try {
        const product = req.body;

        if(!product.name || !product.price || !product.image) {
            return res.status(400).json({success: false, messsage: 'All fields are required'})
        }

        const newProduct = new Product(product);
        await newProduct.save();
        res.status(201).json({success: true, product: newProduct});

    } catch (error) {
        console.log("Error in creating product: ", error.message);
        res.status(500).json({success: false, message: "Server error"});
    }
};

export const updateProduct = async(req, res) => {
    try {
        const {id} = req.params;
        const product = req.body;

        if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({success: false, message: 'Invalid Product Id'});
        };

        const updateProduct = await Product.findByIdAndUpdate(id, product, {new: true});
        res.status(200).json({success: true, product: updateProduct});

    } catch (error) {
        console.log("Error in updating product: ", error.message);
        res.status(500).json({success: false, message: 'Server error'})
    }
};

export const deleteProduct = async(req, res) => {
    try {
       const {id} = req.params;

       if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({success: false, message: "Invalid produc id"})
       };
       
       await Product.findOneAndDelete(id);
       res.status(200).json({success: true, message: 'Deletes product successfully'})

    } catch (error) {
        console.log("Error in deleting product", error.message);
        res.status(500).json({success: false, message: 'Server error'})
    }
};