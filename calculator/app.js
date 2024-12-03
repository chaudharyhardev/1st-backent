const http = require("http");
const handalar = require ("./mainHandler");





const server = http.createServer(handalar);

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});