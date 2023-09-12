# insta-clone app

# <h1>note </h1>

# password hash with bycrpit

in sign up conroller

      const hashedpassword = await bcrypt.hash(password, 12);

# email validation with regex

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
