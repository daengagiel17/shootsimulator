'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Instructor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Course);
    }
  }
  Instructor.init({
    name: DataTypes.STRING,
    rank: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Instructor',
    tableName: 'instructor',
  });
  return Instructor;
};