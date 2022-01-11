const User = require("./classes/user.js");
const name = await User.getName(1);
console.log(name);
