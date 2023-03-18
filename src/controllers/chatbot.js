const Menu = require("../model/Menu");
const Order = require("../model/Order")
const chatbot = async (req, res) => {
  // if ((req.body.action = "1")) {
  //   const menuItems = await Menu.find({});
  //   res.status(200).json({ menuItems });
  // } 

  // if(req.body.action = '99'){
  //      const orders = await Order.find({})
  //      if(!orders){
  //       res.status(404).json({msg : "no order placed"})
  //      }

  //      res.status(200).json({msg :"order placed"})
  // }
  switch (req.body.action) {
    case "1":
      const menuItems = await Menu.find({});
      res.status(200).json({ menuItems });

      break;

    case "99":
      const orders = await Order.find({});
          if(!orders){
           res.status(404).json({msg : "no order placed"})
          }

         res.status(200).json({msg :"order placed"})

         
  }
  
  
};

module.exports = { chatbot };
