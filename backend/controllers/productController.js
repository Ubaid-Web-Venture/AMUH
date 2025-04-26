import {v2 as cloudinary} from 'cloudinary'
import productModel from "../models/productModel.js"
import fs from 'fs';

// function for add product
const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, subCategory, sizes, bestseller } = req.body;
    
        // فائلز کو پروسیس کریں
        const images = [];
        if (req.files) {
            const imageFields = ["image1", "image2", "image3", "image4"];
            for (const field of imageFields) {
                if (req.files[field]) {
                    const file = req.files[field][0];
                    const result = await cloudinary.uploader.upload(file.path, {
                        resource_type: 'image'
                    });
                    images.push(result.secure_url);
                    
                    // عارضی فائل کو ڈیلیٹ کریں
                    fs.unlinkSync(file.path);
                }
            }
        }
    
        // پراڈکٹ ڈیٹا تیار کریں
        const productData = {
            name,
            description,
            category,
            price: Number(price),
            subCategory,
            bestseller: bestseller === "true",
            sizes: typeof sizes === "string" ? JSON.parse(sizes) : sizes, // صرف ایک بار پارس کریں
            images: images, // Array of URLs
            date: Date.now()
        };
    
        // ڈیٹا بیس میں محفوظ کریں
        const product = new productModel(productData);
        await product.save();
        
        res.json({ success: true, message: "Product Added" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
    };
// function for list product
const listProducts = async (req, res) => {
    try {
      const products = await productModel.find({});
      res.json({ success: true, products }); // ڈیٹا بھیجیں
    } catch (error) {
      res.json({ success: false, message: error.message });
    }
  };
// function for removing product
const removeProduct = async (req,res) => {
    try {

        await productModel.findByIdAndDelete(req.body.id)
        res.json({success:true,message:"Product Removed"})
        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }    
}

// function for single product info
const singleProduct = async (req,res) => {
      try {
        
        const { productId } = req.body
        const product = await productModel.findById(productId)
        res.json({success:true,product})
        
      } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
      }    
    
}

export {listProducts, addProduct, removeProduct, singleProduct}