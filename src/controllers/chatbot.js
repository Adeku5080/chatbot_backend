const Menu = require("../model/Menu");
const Order = require("../model/Order");


const chatbot = async (req, res) => {

  switch (req.body.action) {
    case "1":
      const menuItems = await Menu.find({});

      res.status(200).json({
        body: {
          action: "1-res",
          data: menuItems,
        },
      });

      break;

    case "1-res":
      const orders = await Order.find({});
      if (!orders) {
        res.status(404).json({ msg: "no order placed" });
      }

      res.status(200).json({ orders });
  }
};

module.exports = { chatbot };
