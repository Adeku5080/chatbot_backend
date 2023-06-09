const Device = require("../model/Device");

/**
 * 
 * @param {object} req 
 * @param {object} res 
 */
const createDevice = async (req, res) => {
  try {
    const device = await Device.create(req.body );
    res.status(200).json({device})
  } catch (err) {
    console.log(err);
  }
};

module.exports = { createDevice };
