module.exports = (sequelize, dataTypes) => {
  let alias = 'Country';
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
    code: {
      type: dataTypes.STRING(3)
    }
  };
  let config = {
      tableName: 'countries',
      timestamps: false
  };
  const Country = sequelize.define(alias, cols, config)

  return Country
}