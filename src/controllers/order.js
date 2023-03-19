const orderModel = require("../model/Order");

const createOrder = async (req, res) => {
    console.log(req.session)
  try {
    
    const { item } = req.body;
    const order = await orderModel.create({ item });
    res.status(200).json({ order });
  } catch (err) {
    console.log(err);
  }
};

const getAllOrders = async (req, res) => {
  const orders = await orderModel.find({});
  res.status(200).json({ orders });
};

module.exports ={
    createOrder,getAllOrders
}