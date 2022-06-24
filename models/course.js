'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Instructor);
      this.hasMany(models.CourseDetail);
    }
  }
  Course.init({
    date: DataTypes.DATE,
    time: DataTypes.TIME,
    weapon_name: DataTypes.STRING,
    weapon_type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Course',
    tableName: 'course'
  });
  Course.associate = function(models) {
    Course.belongsTo(models.Instructor, {foreignKey: 'instructorId', as: 'instructor'})
    Course.hasMany(models.CourseDetail, {foreignKey: 'courseId', as: 'course_detail'})
  };
  return Course;
};