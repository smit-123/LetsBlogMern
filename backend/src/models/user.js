const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // Import bcryptjs

const userSchema = new mongoose.Schema({
    fullname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});



// Use pre middleware to hash the password before saving
userSchema.pre('save', async function (next) {
    try {
        if (!this.isModified('password')) {
            return next(); // If password isn't modified, skip hashing
        }

        // Generate a salt and hash the password
        const salt = await bcrypt.genSalt(10); // You can adjust the salt rounds
        const hashedPassword = await bcrypt.hash(this.password, salt);
        this.password = hashedPassword;

        return next();
    } catch (error) {
        return next(error);
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
