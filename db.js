const { connect } = require('mongoose');

const dbURl = 'mongodb://localhost:27017/test';
const connectToDb = () => {
  return connect(dbURl, { useUnifiedTopology: true, useNewUrlParser: true });
};

module.exports = {
  connectToDb,
};
