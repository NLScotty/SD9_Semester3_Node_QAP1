// Required to run the os module
var os = require('os');
//some console stuff to format the data
console.log("----------------------------------")
console.log("         Software Specs")
console.log("----------------------------------")
// Returns the platform
console.log("Platform: "+os.platform());
// Returns the Architecture of the platform
console.log("Architectre: "+ os.arch());
console.log("----------------------------------")
console.log("         Hardware Specs")
console.log("----------------------------------")
// Returns an object array of the CPUs on the system. Using .length, gets the amount
// of cpus
console.log("CPUs: "+os.cpus().length);
// Returns the total memory of the hardrive in bytes
console.log("TotalMemory: "+ os.totalmem()+ " bytes");
// Returns the free memory of the hardrive in bytes. 
// Useful to check before storing data on the host machine
console.log("FreeMemory: "+ os.freemem()+ " bytes");


