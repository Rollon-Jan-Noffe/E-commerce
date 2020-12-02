
const express = require('express');
const router = express.Router();
//const Product = require('../models/product');

router.get('', (req,res,next) =>{
    res.render('shop/home');
});

router.get('/about', (req,res,next) =>{
    res.render('shop/aboutus');
});

router.get('/contact', (req,res,next) =>{
    res.render('shop/contactus');
});

router.get('/signin', (req,res,next) =>{
    res.render('shop/signin');
});

router.get('/signup', (req,res,next) =>{
    res.render('shop/signup');
});

router.get('/shipping', (req,res,next) =>{
    res.render('shop/shipping');
});

/*
router.get('/admin', (req,res,next) =>{
    res.render('admin');
});
*/

router.get('/ordersuccess', (req,res,next) =>{
    res.render('shop/ordersuccess');
});




module.exports = router;
