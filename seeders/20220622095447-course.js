'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('course', [
      {
        instructorId: 1,
        date: new Date("2022/06/21"),
        time: "08:00:00",
        weapon_name: "Senjata",
        weapon_type: "Typenya"    
      },
      {
        instructorId: 1,
        date: new Date("2022/06/21"),
        time: "10:00:00",
        weapon_name: "Senjata B",
        weapon_type: "Typenya B"    
      },
      {
        instructorId: 2,
        date: new Date("2022/06/21"),
        time: "12:00:00",
        weapon_name: "Senjata AB",
        weapon_type: "Typenya AB"    
      },
    ], {});   
    await queryInterface.bulkInsert('course_detail', [
      {
        courseId: 1,
        shooter_name: 'Lory',
        round_fired: 10,
        hits: 10,
        misses: 0,   
        score: 10,  
        result: "Excellent"    
      },
      {
        courseId: 1,
        shooter_name: 'Abi',
        round_fired: 5,
        hits: 10,
        misses: 5,   
        score: 5,  
        result: "Oke"    
      },
      {
        courseId: 1,
        shooter_name: 'Mufid',
        round_fired: 3,
        hits: 10,
        misses: 7,   
        score: 3,  
        result: "Not Good"    
      },
      {
        courseId: 2,
        shooter_name: 'Johan',
        round_fired: 7,
        hits: 10,
        misses: 3,   
        score: 7,  
        result: "Good"    
      },
      {
        courseId: 2,
        shooter_name: 'Juan',
        round_fired: 7,
        hits: 10,
        misses: 3,   
        score: 7,  
        result: "Good"    
      },
      {
        courseId: 2,
        shooter_name: 'Juhan',
        round_fired: 7,
        hits: 10,
        misses: 3,   
        score: 7,  
        result: "Good"    
      },
      {
        courseId: 3,
        shooter_name: 'Saeful',
        round_fired: 10,
        hits: 10,
        misses: 0,   
        score: 10,  
        result: "Excellent"    
      },
      {
        courseId: 3,
        shooter_name: 'Pimardi',
        round_fired: 10,
        hits: 10,
        misses: 0,   
        score: 10,  
        result: "Excellent"    
      },
      {
        courseId: 3,
        shooter_name: 'Alfi',
        round_fired: 10,
        hits: 10,
        misses: 0,   
        score: 10,  
        result: "Excellent"    
      },
      {
        courseId: 3,
        shooter_name: 'Dadang',
        round_fired: 8,
        hits: 10,
        misses: 2,   
        score: 8,  
        result: "Good"    
      },
      {
        courseId: 3,
        shooter_name: 'Komeng',
        round_fired: 8,
        hits: 10,
        misses: 2,   
        score: 8,  
        result: "Good"    
      },
    ], {});   
  },

  async down (queryInterface, Sequelize) {}
};
