const bcrypt = require("bcrypt")
const saltRounds = 10;
 
async function hashPassword(salty, pass) {
    try {
        const salt = await bcrypt.genSalt(salty);
        const hash = await bcrypt.hash(pass, salt);
        return hash;
    } catch (err) {
        console.error(err.message);
        return null;  // Return null or handle the error appropriately
    }
}
 
async function getHashedPassword() {
    try {
        const hashedPassword = await hashPassword(saltRounds, password);
        console.log("Hashed Password:", hashedPassword);
        return hashedPassword;  // Now you have the hashed password in a variable
    } catch (err) {
        console.error('Failed to get hashed password:', err);
    }
}
 
getHashedPassword()

module.exports = { hashPassword, getHashedPassword };