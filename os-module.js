//DIFFRENT FUNCTION OR PROPERTIES OF THE OS MODULE


//1. os.EOL 
let a = "My name is ankit"+ os.EOL + "I am a student"
console.log(a)
//THE EOL PROPERTY ADD AN END OF THE LINE CHARACTER TO THE SPACE SPECIFIED

//2.os.arch()
console.log(os.arch())
//RETURN THE ARCHITECTURE OFTHE OS CPU FOR WHICH THE NODE.JS WAS COMPILED

//3.os.cpus()
console.log(os.cpus())
//RETURN AN OBJECT CONTAING THE INFORMATION ABOUT EACH LOGICAL CPU CORE
//THE PROPERTY INCLUDES 'MODEL', 'SPEED', 'CORES'

//4. os.constants
console.log(os.constants)
//RETRUNS AN OBJECT CANTAING ALL THE CONSTANTS PRE-DEFINED IN THE OS

//5.os.endianness()
console.log(os.endianness())


//6. os.freemem()
console.log(os.freemem())
//RETURN THE TOTAL AMOUNT OF THE FREE MEMORY PRESENT IN THE SYSTEM

//7. os.getPriority()
console.log(os.getPriority())

//8. os.homedir()
console.log(os.homedir())
//RETURN THE HOME DIRECTORY OF THE CURRENT USER

//9. os.hostname()
console.log(os.hostname())
//RETURN THE HOSTNAME OF THE CURRENT SYSTEM

//10. os.loadavg()
console.log(os.loadavg())
//RETURN AN ARRAY CONTAING THE AVERAGE LOAD OF THE SYSTEM AT AN INTERVAL OF 1, 5 AND 15 MINUTES

//11. os.networkInterfaces()
console.log(os.networkInterfaces())
//RETRUNS AN OBJECT CONTAING ALL THE DETAIL OF THE NETWORKING INTERFERCE OF THE SYSTEM

//12. os.platform()
console.log(os.platform())
//RETURN THE TYPE OF THE OS

//13. os.release()
console.log(os.release())
//RETURN THE RELEASE OF THE OS

//14. os.tmpdir()
console.log(os.tmpdir())
//RETURNS THE DEFAULT DIRECTORY FOR THE TEMPORARY FILES

//15. os.totalmem()
console.log(os.totalmem())
//RETURNS THE TOTAL MEMORY OF THE SYSTEM

//16. os.type()
console.log(os.type())
//RETURN THE TYPE OF THE OS

//17. os.userInfo()
console.log(os.userInfo())
//RETURNS THE INFORMATION ABOUT THE CURRENT USER

//18. os.uptime()
console.log(os.uptime())
//RETURNS THE SYSTEM UP TIME IN TERMS OF SECOND

//19. os.version()
console.log(os.version())
//RETURNS THE VERSION OF THE OS