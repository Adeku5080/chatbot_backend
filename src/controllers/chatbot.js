const Menu = require("../model/Menu");
const Order = require("../model/Order");

const chatbot = async (req, res) => {
  switch (req.body.action) {
    case "1":
      const menuItems = await Menu.find({});

      res.status(200).json({
        action: "1-res",
        data: menuItems,
      });

      break;

    case "0":
      res.status(200).json({
        action: "1",
      });

    case "1-res":
      const items = req.body.userInput.split(",");
      const deviceId = req.headers.authorization;

      if (!items.length) {
        return res.status(200).json({
          action: "1",
          data: {
            message:
              "No order to place.Please ,try again by selectiong any of the options below",
          },
        });
      }

      const products = Menu.find({ code: { $in: items } });
      const order = Order.create({ item: products, device_id: deviceId });
      res.status(200).json({
        action: "1",
        data: { message: "Order created.What more can I do for you?" },
      });

    case "98":
      const Id = req.headers.authorization;
      if (!Id) {
        return res
          .status(404)
          .json({
            action: "98-res",
            data: { message: "You have not created any order" },
          });
      }

      const orderedItems = Order.find({ device_id: Id });
      console.log(orderedItems)
      // res.status(200).json({ action: "98-res", data: orderedItems });
  }
};

module.exports = { chatbot };
