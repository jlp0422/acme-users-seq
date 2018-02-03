/* eslint-disable */

const Sequelize = require('sequelize');
const _conn = new Sequelize(process.env.DATABASE_URL);

const User = _conn.define('user', {
  name: Sequelize.STRING
});

const sync = () => {
  return _conn.sync({ force:true })
}

const seed = () => {
  return Promise.all([
    User.create({ name: 'moe' }),
    User.create({ name: 'larry' }),
    User.create({ name: 'curly' })
  ]);
};

module.exports = {
  sync,
  seed,
  models: {
    User
  }
}
// _conn.sync({ force: true })
//   .then(() => {

//   })
  // .then( users => {
  //   return User.findAll({where: { name: 'moe'}})
  // })
  // .then( users => console.log(users[0].name))
