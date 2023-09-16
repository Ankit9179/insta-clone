const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel"); //for getting user _id
const secretKey = process.env.JWT_SECRET;

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res
      .status(401)
      .send({ success: false, message: "you must login first" });
  }
  //get token
  const token = authorization.replace("Bearer ", ""); //u'll get jwt token
  //varify token
  jwt.verify(token, secretKey, async (err, payload) => {
    if (err) {
      return res
        .status(401)
        .send({ success: false, message: "you must login first" });
    }
    const { _id } = payload; //get user _id information from token
    const verifyedUser = await userModel.findById(_id); // verify _id from mongoo
    if (!verifyedUser) {
      return res
        .status(401)
        .send({ success: false, message: "you must login first" });
    }
    // console.log(verifyedUser);
    req.userData = verifyedUser; //add verify user Data in frontend req as a variable req.userDta
    next();
  });
};
