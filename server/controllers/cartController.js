const CartItem = require('../models/AddtoCart');

exports.addToCart = async (req, res) => {
  try {
    const { id, name, description, price, image } = req.body;
    const newItem = new CartItem({
      productId: id,
      name,
      description,
      price,
      image,
    });
    await newItem.save();
    res.status(201).json({ message: 'Item added to cart', item: newItem });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add item to cart' });
  }
};

exports.getCart = async (req, res) => {
  try {
    const items = await CartItem.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch cart items' });
  }
};


exports.deleteCartItem = async (req, res) => {
  try {
    await CartItem.findByIdAndDelete(req.params.id);
    res.json({ message: 'Item deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete item' });
  }
};