/* eslint-disable */

const Sequelize = require('sequelize');
const _conn = new Sequelize(process.env.DATABASE_URL);

const User = _conn.define('user', {
  name: Sequelize.STRING,
  residence: Sequelize.STRING,
  funFact: Sequelize.TEXT,
  image: Sequelize.TEXT
});

const sync = () => {
  return _conn.sync({ force:true })
}

const seed = () => {
  return Promise.all([
    User.create({ name: 'Spongebob', residence: 'pineapple', funFact: `Has won 374 consecutive 'Employee of the Month' awards`, image: '../vendor/spongebob.png' }),
    User.create({ name: 'Patrick', residence: 'rock', funFact: 'Thinks mayonnaise is an instrument', image: '../vendor/patrick.png'}),
    User.create({ name: 'Squidward', residence: 'Easter Island head', funFact: 'Is actually an octopus', image: '../vendor/squidward.png' })
  ]);
};

module.exports = {
  sync,
  seed,
  models: {
    User
  }
}
