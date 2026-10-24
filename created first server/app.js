//first server 
//new syntax of function creating 
const http = require('http');

const server=http.createServer((req,res)=>{// ye line hume ek object return karegi jo server name ke variable me store hay.
    console.log(req);
   // process.exit();
    //process.exit se server ko paheli request milne par voh terminated hota hay |
});
// Yaha tak server toh ban gaya per , server ne request suna start nahi kiya . For this we add above line
const PORT=3000;
server.listen(PORT,()=>{
    console.log(`server runnng at http://localhost:${PORT}`);
});// server me koi bhi change karne hay toh pahele usko terminate karo
