module.exports = (sequelize, DataTypes) => {
  const Trip = sequelize.define('Trip', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    destination: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    preferences: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  return Trip;
};
