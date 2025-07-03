const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  productId: { type: Number, required: true },
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  image: String,
  // Optionally, you can add userId if you want to associate carts with users
  // userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const CartItem = mongoose.model('CartItem', cartItemSchema);

module.exports = CartItem;