const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("Ijoba  arometa leleyi");
});

app.listen(3000, () =>{
  console.log("Eyin arometa ekabo. An ri yin o!");
});

