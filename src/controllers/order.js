const orderModel = require("../model/Order");

/**
 * 
 * @param {object} req 
 * @param {object} res 
 */
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


module.exports ={
    createOrder
}