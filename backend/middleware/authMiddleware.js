const JWT = require("jsonwebtoken");
const userModel = require("../model/userModel");

//Protected Routes token base
const requireSignIn = async (req, res, next) => {
  try {
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
  }
};
//admin acceess
const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
const roles = [0 , 1]
    if (!roles.includes(user.role)) {
      return res.status(401).send({
        success: false,
        message: "UnAuthorized Access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      error,
      message: "Error in admin middelware",
    });
  }
};
module.exports = {
  requireSignIn,
  isAdmin,
};
