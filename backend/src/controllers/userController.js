const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs")

//register user

const signupUser = async (req, res) => {
    // Destructure the required fields from the request body
    const { password, email, fullname } = req.body;

    try {
        // Check if the 'password' field is missing in the request body
        if (!password) {
            // If missing, return a 404 response with an error message
            return res.status(404).json({ message: "Password is required" });
        }

        // Check if a user with the same email already exists in the database
        const userAlreadyExists = await User.findOne({ email });

        if (userAlreadyExists) {
            // If a user with the same email exists, return a 404 response with an error message
            return res.status(404).json({ message: "User already exists with this email" });
        } else {
            // If the user doesn't exist, create a new user with the provided information
            const user = await User.create({ password, email, fullname });

            // Return a 201 response indicating successful user registration
            return res.status(201).json({ message: "User registered successfully", data: user });
        }
    } catch (error) {
        // If an error occurs during the process, return a 500 response with an error message
        res.status(500).json({ message: error.message });

        return;
    }
}

// login user

const loginUser = async (req, res) => {
    // Destructure email and password from the request body
    const { email, password } = req.body;

    try {
        // Attempt to find a user with the provided email
        const user = await User.findOne({ email });

        if (user) {
            // User found, now compare the provided password with the hashed password in the user record
            const passwordMatch = await bcrypt.compare(password, user.password);

            if (passwordMatch) {
                // Passwords match, generate a JWT token for authentication
                const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
                    expiresIn: '365d', // Token expires in 365 days
                });

                // Return a successful login response with the JWT token and user information
                return res.status(200).json({
                    message: "login_success",
                    token,
                    user
                });
            } else {
                // Passwords do not match, return a 400 response with an error message
                return res.status(400).json({ message: "Incorrect password" });
            }
        } else {
            // User not found with the provided email, return a 400 response with an error message
            return res.status(400).json({ message: "Email not found" });
        }

    } catch (error) {
        // If an error occurs during the process, return a 500 response with an error message
        res.status(500).json({ message: error.message });
    }
}


module.exports = {
    loginUser,
    signupUser
}