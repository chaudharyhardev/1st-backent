const sumhandalar = require("./request")






const mainHandler = (req, res) => {
  console.log(req.url, res.method);
  res.writeHead(200, { "Content-Type": "text/html" });

  if (req.url === "/") {
    res.write(`<!DOCTYPE html>
    <html>
    <head>
      <title>Home Page</title>
    </head>
    <body>
      <h1>Welcome to the Home Page</h1>
      <a href="/calculator">go to calculator</a>
    </body>
    </html>`);
    return res.end();
  } else if (req.url === "/calculator") {
    res.write(`
      <!DOCTYPE html>
<html lang="en">
<head>
  <title>calculator</title>
</head>
<body>
  <form>
      <h1>Calculator</h1>
    <input type="text" id="num1" placeholder="Enter first number">
  
    <input type="text" id="num2" placeholder="Enter second number">
    <input type="submit" value="sum">
</body>
</html>


      `);
    return res.end();
  }else if (req.url.toLowerCase === "/calculate-results"  && req.method === 'POST'){

    return sumhandalar(req , res); 

  }
    

  res.write(`<!DOCTYPE html>
    <html>
    <head>
      <title>Home Page</title>
    </head>
    <body>
      <h1>404 page not found</h1>
      <a href="/">go to home</a>
    </body>
    </html>`);
  return res.end();
};

module.exports = mainHandler;
