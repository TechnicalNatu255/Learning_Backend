//first server 
//new syntax of function creating 
const http = require('http');
const fs = require('fs');

const server=http.createServer((req,res)=>{// ye line hume ek object return karegi jo server name ke variable me store hay.
    console.log(req.url,req.method,req.headers);
   // process.exit();
    //process.exit se server ko paheli request milne par voh terminated hota hay |
    if(req.url ==='/'){
        res.setHeader('content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Node js Server, Welcome!! </title></head>');
    res.write('<body><h1>My First Server </h1>');
    res.write('<h1>Welcome to Home page</h1>');
    res.write('<form action="/submit-details" method="POST">');
    res.write('<input type="text" id="name" name="name" placeholder="Enter your name"><br><br>');
    res.write('<label for="gender">Gender:</label>');
    res.write('<input type="radio" id="male" name="gender" value="male">');
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="female" name="gender" value="female">');
    res.write('<label for="female">Female</label><br><br>');
    res.write('<button type="submit">Submit</button>');
    res.write('</form>');
    

    res.write('</html>');
    return  res.end();

    }else if(req.url.toLowerCase()==="/submit-details"&& req.method=="POST"){
    fs.writeFileSync('user.txt','aniruddha');
    res.statusCode=302;
    res.setHeader('Location','/');    
    }
    else if(req.url ==='/product'){
        res.setHeader('content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Node js Server, Welcome!!</title></head>');
    res.write('<body><h1>Second page !! </h1></body>');
    res.write('</html>');
     return  res.end();

    }
        res.setHeader('content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Node js Server, Welcome!! </title></head>');
    res.write('<body><h1>Nice Day!! </h1></body>');
    res.write('</html>');
    res.end();
    
   
});
// Yaha tak server toh ban gaya per , server ne request suna start nahi kiya . For this we add above line
const PORT=3000;
server.listen(PORT,()=>{
    console.log(`server runnng at http://localhost:${PORT}`);
});// server me koi bhi change karne hay toh pahele usko terminate karo
