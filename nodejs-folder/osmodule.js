//os module is inbuild module 
const os = require('os');

console.log(os.freemem()); //4945575936
console.log(os.homedir());
//4945154048
///Users/awanlaptop
console.log(os.hostname()); //4837027840
///Users/awanlaptop
console.log(os.release());//awans-MacBook-Pro.local
console.log(os.platform()); //darwin

console.log(os.availableParallelism());
console.log(os.arch());
//Returns the operating system CPU architecture for which the Node.js binary was compiled.
console.log(os.constants());
console.log(os.cpus());
console.log(os.machine());