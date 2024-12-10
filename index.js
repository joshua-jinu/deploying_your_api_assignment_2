const express = require('express');
const { resolve } = require('path');

require('dotenv').config();

const app = express();
const port = 3010;
const isAdmin = process.env.IS_ADMIN === 'true';

if (isAdmin) {
  console.log("Admin privileges granted.");
} else {
  console.log("Access restricted. Admin only.");
}

app.use(express.static('static'));

app.get('/', (req, res) => {
  if(isAdmin === 'true'){
    res.send({ message: "Welcome, Admin!", data: ["Admin Data 1", "Admin Data 2"] })
  }else{
    res.send({ message: "Welcome, Admin!", data: ["User Data 1", "User Data 2"] })
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
