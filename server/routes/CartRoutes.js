const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

router.post('/addToCart', cartController.addToCart);
router.get('/cart', cartController.getCart);
// router.delete()
router.delete('/cart/:id', cartController.deleteCartItem);
module.exports = router;