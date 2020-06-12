const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("Ijoba  arometa leleyi");
});

const port = process.env.port || 3000;
app.listen(port, () =>{
  console.log("Eyin arometa ekabo. An ri yin o!");
});

