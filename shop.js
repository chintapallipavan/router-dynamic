const product=require('../models/product');
const { products } = require('./admin');
exports.getproduct=(req,res,next)=>{
    product.fetchAll(products=>{
        res.render('shop/product-list',{
            prods:products,
            pagetitle:'All products',
            path:'/products'
        });
    })
};
exports.getproduct=(req,res,next)=>{
    const proId=req.params.productId;
product.findById(proId,product=>{
console.log(product);
});
res.redirect('/');
};