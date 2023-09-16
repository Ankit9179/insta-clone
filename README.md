# insta-clone app

# <h1>note </h1>

# password hash with bycrpit

in sign up conroller

      const hashedpassword = await bcrypt.hash(password, 12);

# pasword validation with regex

the code for for email validation with regex from frontend before hittting fetch method

                const regexPass =
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$!%^&*?])[A-Za-z\d@#$!%^&*?]{8,}$/;
        // send data to backend
        const sendData = async (e) => {
            e.preventDefault();

            try {
            //checking email and passwoud
            if (!regexPass.test(password)) {
                toast.error(
                "password must be at least 8 characters with ?=.*[@#$%^&-+=()aA123"
                );

# preview an image code

            <input type="file" accept="image/*" onchange="loadFile(event)">
            <img id="output"/>
            <script>
            var loadFile = function(event) {
                var output = document.getElementById('output');
                output.src = URL.createObjectURL(event.target.files[0]);
                output.onload = function() {
                URL.revokeObjectURL(output.src) // free memory
                }
            };
            </script>

# user verify with jwt token

this is code of user verify

            const jwt = require("jsonwebtoken");
        const mongoose = require("mongoose");
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
            next();
        });
        };

# post api

some code of post api
