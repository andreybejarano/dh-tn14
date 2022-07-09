module.exports = (sequelize, dataTypes) => {
  let alias = 'User';
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: dataTypes.STRING(255),
      allowNull: false
    },
    email: {
      type: dataTypes.STRING(255),
      allowNull: false
    },
    password: {
      type: dataTypes.STRING(255),
      allowNull: false
    },
    roles_id: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    countries_id: {
      type: dataTypes.INTEGER,
      allowNull: false
    }
  };
  let config = {
      tableName: 'users',
      timestamps: false
  };
  const User = sequelize.define(alias, cols, config);

  User.associate = function(models) {
    User.belongsTo(models.Role, {
      as:  'role',
      foreignKey: 'roles_id'
    });

    User.belongsTo(models.Country, {
      as:  'country',
      foreignKey: 'countries_id'
    });
  }

  return User;
}