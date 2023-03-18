import express from 'express'
import {
     categoryController,
     createCategoryController, 
     deleteCategoryController,
     singleCategoryController,
     updateCategoryController } 
     from '../controllers/categoryController.js'
     
import { requireSignIn,isAdmin } from '../middlewears/authMiddleware.js'
const router = express.Router()

//routes

//create category
router.post('/create-category',requireSignIn,isAdmin,createCategoryController)

//update category
router.put('/update-category/:id',requireSignIn,isAdmin,updateCategoryController)

//getAll category
router.get('/get-category',categoryController)

//sigle category
router.get('/single-category/:slug',singleCategoryController)

//delete category 
router.delete('/delete-category/:id',requireSignIn,isAdmin,deleteCategoryController)
export default router