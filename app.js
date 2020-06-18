const express = require('express');
const app = express();

const port = process.env.port || 8081;
app.listen(port, () =>{
  console.log("Eyin arometa ekabo. An ri yin o!");
});

app.get('/', (req, res) => {
  res.send("Ijoba  arometa leleyi");
});

