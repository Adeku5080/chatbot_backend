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

      const products = await Menu.find({ code: { $in: items } });
      const order = await Order.create({ item: products, device_id: deviceId });
      return res.status(200).json({
        action: "1",
        data: { message: "Order created.What more can I do for you?" },
      });

    case "98":
      const Id = req.headers.authorization;
      if (!Id) {
        return res.status(404).json({
          action: "98-res",
           data:{message: "You have not created any order" }},
        );
      }

      const orderedItems = await Order.find({ device_id: Id });
      console.log(orderedItems);
      return res.status(200).json({ action: "98-res", data:{orderedItems} });

      case "99":
        const authId = req.headers.authorization;
        const orders = await Order.find({device_id : authId})
        if(!orders){

          return res.status(404).json({action : "1",data:{message:"No order to place "}})
        }
        return res.status(200).json({action:"1" ,data:{message : "order placed"}})

      case "0":
        const ID = req.headers.authorization;
        await Order.deleteMany({device_id : ID})
        return res.status(200).json({action : "1"})

  }
};

module.exports = { chatbot };
