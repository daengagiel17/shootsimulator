'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CourseDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Course);
    }
  }
  CourseDetail.init({
    shooter_name: DataTypes.STRING,
    round_fired: DataTypes.INTEGER,
    hits: DataTypes.INTEGER,
    misses: DataTypes.INTEGER,
    score: DataTypes.INTEGER,
    result: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CourseDetail',
    tableName: 'course_detail'
  });
  CourseDetail.associate = function(models) {
    CourseDetail.belongsTo(models.Course, {foreignKey: 'courseId', as: 'course'})
  };
  return CourseDetail;
};