//connect mongoodb func
const mongoose = require("mongoose"); //import

const mongoconnection = async () => {
  try {
    await mongoose.connect(process.env.MONGOO_URL);
    console.log("connection successfull");
  } catch (error) {
    console.log(error);
  }
};

module.exports = mongoconnection;
