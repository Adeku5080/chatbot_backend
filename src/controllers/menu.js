const Menu = require("../model/Menu");

/**
 * 
 * @param {object} req 
 * @param {object} res 
 */
const createItem = async (req, res) => {
  try{
    const item = await Menu.create(req.body)
    res.status(200).json({item})
  }catch(err){
    console.log(err)
  }
};

/**
 * 
 * @param {*} req 
 * @param {object} res 
 */
const getAllItems = async (req, res) => {
  try{
    const items = await Menu.find({})
     res.status(200).json({items})
  }catch(err){
    console.log(err)
  }
};



module.exports = {
  createItem,
  getAllItems,
 
};
