const express=require('express')
const  Router=express.Router()
const middlewares=require('../middlewares/admin/auth')
const adminController=require('../controllers/adminController')
const categoryController=require('../controllers/categoryController')
const upload=require('../config/multer')
const subcategoryController=require('../controllers/subcategoryController')

Router.get('/',adminController.getLogin)
Router.get('/',adminController.getLogin)
Router.post('/',adminController.postLogin)
Router.post('/otp',adminController.postOtp)
Router.post('/resend',adminController.postResend)
Router.get('/dashboard',/*middlewares.isAdminAuthenticated,*/adminController.getDashboard) //----- hides just for style fixing


//Category
Router.get('/categories',categoryController.getCategories)
Router.post('/categories',upload.array('images',5),categoryController.postCategory)
Router.get('/editCategory/:id',categoryController.getEditCategory)
Router.post('/editCategory/:id',upload.array('images',5),categoryController.postEditCategory)
Router.get('/deleteCategory/:id',categoryController.getdeleteCategory)
Router.get('/searchCategory',categoryController.getSearchCategory)
Router.get('/deleteImgCategory/:id/:imageUrl',categoryController.deleteCategoryImage)


//SubCategory
Router.get('/subCategories',subcategoryController.getSubCategories)
Router.post('/subCategories',upload.array('images',5),subcategoryController.postSubCategory)
Router.get('/editSubCategory/:id',subcategoryController.getEditSubCategory)
Router.post('/editSubCategory/:id',upload.array('images',5),subcategoryController.postEditSubCategory)
Router.get('/deleteSubCategory/:id',subcategoryController.getdeleteSubCategory)
Router.get('/searchSubCategory',subcategoryController.getSearchSubCategory)
Router.get('/deleteImgSubCategory/:id/:imageUrl',subcategoryController.deleteSubCategoryImage)


module.exports=Router