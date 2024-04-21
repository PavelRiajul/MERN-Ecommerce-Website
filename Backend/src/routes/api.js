const express=require('express');
const ProductController = require('../controllers/ProductController')
const UserController = require('../controllers/UserController')
const CartListController = require('../controllers/CartListController')
const WishListController = require('../controllers/WishListController')
const InVoiceController = require('../controllers/InVoiceController')
const FeaturesController = require('../controllers/ FeaturesController')


const AuthVerification = require('../middlewares/AuthVerification')
const router=express.Router();

//API routing end point
//Product
router.get('/ProductBrandList',ProductController.ProductBrandList)
router.get('/ProductCategoryList',ProductController.ProductCategoryList)
router.get('/ProductSliderList',ProductController.ProductSliderList)
router.get('/ProductListByBrand/:BrandID',ProductController.ProductListByBrand)
router.get('/ProductListByCategory/:CategoryID',ProductController.ProductListByCategory)
router.get('/ProductListBySimilar/:CategoryID',ProductController.ProductListBySimilar)
router.get('/ProductListByKeyword/:keyword',ProductController.ProductListByKeyword)
router.get('/ProductListByRemark/:Remark',ProductController.ProductListByRemark)
router.get('/ProductDetails/:ProductID',ProductController.ProductDetails)
router.get('/ProductReviewList/:ProductID',ProductController.ProductReviewList)




//User
router.get('/UserOTP/:email',UserController.UserOTP)
router.get('/VerifyLogin/:email/:otp',UserController.VerifyLogin)
router.get('/UserLogout',AuthVerification,UserController.UserLogout)
router.post('/CreateProfile',AuthVerification,UserController.CreateProfile)
router.post('/UpdateProfile',AuthVerification,UserController.UpdateProfile)
router.get('/ReadProfile',AuthVerification,UserController.ReadProfile)


//Wish
router.post('/SaveWishList',AuthVerification,WishListController.SaveWishList)
router.post('/RemoveWishList',AuthVerification,WishListController.RemoveWishList)
router.get('/WishList',AuthVerification,WishListController.WishList)


//Cart
router.post('/SaveCartList',AuthVerification,CartListController.SaveCartList)
router.post('/RemoveCartList',AuthVerification,CartListController.RemoveCartList)
router.get('/CartList',AuthVerification,CartListController.CartList)
router.get('/UpdateCartList/:cartID',AuthVerification,CartListController.UpdateCartList)


//Invoice & Payment 
router.get('/CreateInvoice',AuthVerification,InVoiceController.CreateInvoice)
router.get('/InvoiceList',AuthVerification,InVoiceController.InvoiceList)
router.get('/InvoiceProductList/:invoice_id',AuthVerification,InVoiceController.InvoiceProductList)
router.post('/PaymentSuccess/:trxID',InVoiceController.PaymentSuccess)
router.post('/PaymentCancel/:trxID',InVoiceController.PaymentCancel)
router.post('/PaymentFail/:trxID',InVoiceController.PaymentFail)
router.post('/PaymentIPN/:trxID',InVoiceController.PaymentIPN)


//Features
router.get('/FeaturesList',FeaturesController.FeaturesList)


// Create Review
router.post('/CreateReview',AuthVerification,ProductController.CreateReview)


module.exports=router