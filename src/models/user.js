
const user = (sequelize, DataTypes) => {
  const userModel = sequelize.define('user', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'user',
    timestamps: false,
    freezeTableName: true
  });

  return userModel;
};

export default user;
