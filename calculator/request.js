const request =(req, res) => {
  console.log(req.url, res.method);
  res.writeHead(200, { "Content-Type": "text/html" });



}
module.exports = request;