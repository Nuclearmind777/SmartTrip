const { Sequelize, DataTypes } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
  }
);

// Import models
const User = require('./User')(sequelize, DataTypes);
const Trip = require('./Trip')(sequelize, DataTypes);
const Itinerary = require('./Itinerary')(sequelize, DataTypes);

// Associations
User.hasMany(Trip, { foreignKey: 'user_id' });
Trip.belongsTo(User, { foreignKey: 'user_id' });

Trip.hasMany(Itinerary, { foreignKey: 'trip_id' });
Itinerary.belongsTo(Trip, { foreignKey: 'trip_id' });

module.exports = {
  sequelize,
  User,
  Trip,
  Itinerary,
};
