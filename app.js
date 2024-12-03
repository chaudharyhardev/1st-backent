const express = require('express')
const bodyParser = require('body-parser');
const path = require('path');

const contact = require("./router/contact-us.js")
const home = require("./router/home.js")
const rootDir = require("./utils/util");

const app = express();

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(rootDir, "public")));

app.use(contact);
app.use(home);


const PORT = 3000;
app.listen(PORT , ()=>{
  console.log(`Server is running on http://localhost:${PORT}`);
})