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

    case "0":
      res.status(200).json({
        body: {
          action: "1",
        },
      });

    case "1-res":
      const items = req.body.userInput.split(",");
      if (!items.length) {
        return res.status(200).json({
          body: {
            action: "1",
            data: {
              message:
                "No order to place.Please ,try again by selectiong any of the options below",
            },
          },
        });
      }
  }
};

module.exports = { chatbot };
