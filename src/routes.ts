import { Router, Request, Response } from 'express';
import multer from 'multer';

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';

import { CreateCategoryController } from './controllers/user/category/CreateCategoryController'
import { ListeCategoryController } from './controllers/user/category/ListeCategoryController'

import { CreateProductController } from './controllers/user/product/CreateProductController'
import { ListByCategoryController } from './controllers/user/product/ListByCategoryController'

import { CreateOrderController } from './controllers/order/CreateOrderController'
import { DeleteOrderController } from './controllers/order/DeleteOrderController'

import { AddItemController } from './controllers/order/AddItemController'
import { RemoveItemController } from './controllers/order/RemoveItemController'
import { sendOrderController } from './controllers/order/sendOrderController'

import { ListOrdersController } from './controllers/order/ListOrdersController'
import { DetailOrderController } from './controllers/order/DetailOrderController'
import { FinishOrderController } from './controllers/order/FinishOrderController'

import { isAuthenticated } from './middlewares/isAuthenticated'

import uploadConfig from './config/multer'

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

//--Rotas user--
router.post('/users', new CreateUserController().handle)

router.post('/session', new AuthUserController().handle)

router.get('/me', isAuthenticated, new DetailUserController().handle)

//--Rotas Category
router.post('/category',isAuthenticated, new CreateCategoryController().handle)
router.get('/category',isAuthenticated, new ListeCategoryController().handle)

//--Rotas product
router.post('/product',isAuthenticated, upload.single('file'), new CreateProductController().handle)

router.get('/category/product', isAuthenticated, new ListByCategoryController().handle)

//-- Rotas ORDER
router.post('/order', isAuthenticated, new CreateOrderController().handle)
router.delete('/order', isAuthenticated, new DeleteOrderController().handle)

router.post('/order/add', isAuthenticated, new AddItemController().handle)
router.delete('/order/remove', isAuthenticated, new RemoveItemController().handle)

router.put('/order/send',isAuthenticated, new sendOrderController().handle)

router.get('/orders', isAuthenticated, new ListOrdersController().handle)
router.get('/orders/detail',isAuthenticated, new DetailOrderController().handle)

router.put('/order/finish',isAuthenticated, new FinishOrderController().handle)

export{ router };

