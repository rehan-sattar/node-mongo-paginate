const express = require('express');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, (err) => {
  if (err) {
    console.log('❌ ERROR WHILE STARTING SERVER: ', err);
  }
  console.log('👌 Server started on port: ', PORT);
});
